import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { extname } from 'node:path';
import { randomUUID } from 'node:crypto';
import { DatabaseService } from '../database/database.service';
import { LoggerService } from '../logger/logger.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UploadedProjectFile } from './types';

type ListParams = {
  search?: string;
  status?: string;
  limit?: number;
  offset?: number;
  ownerId: number;
};

const MAX_FILE_SIZE_BYTES = 100 * 1024 * 1024; // 100MB
const ALLOWED_MIME = new Set([
  'application/zip',
  'application/x-zip-compressed',
  'application/x-rar-compressed',
]);
const ALLOWED_EXT = new Set(['.zip', '.rar']);

@Injectable()
export class ProjectsService {
  constructor(
    private readonly db: DatabaseService,
    private readonly logger: LoggerService,
  ) {}

  async create(body: CreateProjectDto, file: UploadedProjectFile | undefined, user?: { id: number }) {
    if (!body.name?.trim()) {
      throw new HttpException(
        {
          message: 'Ошибка валидации',
          errors: { name: ['Название проекта обязательно'] },
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!file) {
      throw new HttpException(
        {
          message: 'Ошибка валидации',
          errors: { projectFile: ['Файл проекта обязателен'] },
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const storedFileName = this.validateAndPrepareFile(file);

    // NOTE: ownerId пока ставим null — если нужна аутентификация, добавим контекст пользователя
    const project = await this.db.project.create({
      data: {
        name: body.name.trim(),
        description: body.description?.trim() || null,
        projectFile: storedFileName,
        ownerId: user?.id ?? null,
      },
    });

    return { project: this.mapProject(project) };
  }

  async list({ search, status, limit = 20, offset = 0, ownerId }: ListParams) {
    const where: Record<string, unknown> = {};
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }
    if (status) {
      const normalized = status.toUpperCase();
      if (!['ACTIVE', 'ARCHIVED', 'DELETED'].includes(normalized)) {
        throw new HttpException(
          { message: 'Ошибка валидации', errors: { status: ['Некорректный статус'] } },
          HttpStatus.BAD_REQUEST,
        );
      }
      where.status = normalized;
    } else {
      where.status = 'ACTIVE';
    }
    where.ownerId = ownerId;

    const [projects, total] = await this.db.$transaction([
      this.db.project.findMany({
        where: where as never,
        orderBy: { createdAt: 'desc' },
        skip: offset,
        take: limit,
      }),
      this.db.project.count({ where: where as never }),
    ]);

    const hasMore = offset + limit < total;
    return {
      projects: projects.map((p) => this.mapProject(p)),
      total,
      hasMore,
    };
  }

  async getById(id: string, ownerId: number) {
    const numericId = this.parseId(id);
    const project = await this.db.project.findFirst({ where: { id: numericId, ownerId } });
    if (!project) {
      throw new HttpException({ message: 'Ресурс не найден' }, HttpStatus.NOT_FOUND);
    }
    return { project: this.mapProject(project) };
  }

  async update(id: string, body: UpdateProjectDto, file: UploadedProjectFile | undefined, ownerId: number) {
    const numericId = this.parseId(id);
    const existing = await this.db.project.findFirst({ where: { id: numericId, ownerId } });
    if (!existing) {
      throw new HttpException({ message: 'Ресурс не найден' }, HttpStatus.NOT_FOUND);
    }

    let storedFileName: string | undefined;
    if (file) {
      storedFileName = this.validateAndPrepareFile(file);
    }

    const updated = await this.db.project.update({
      where: { id: numericId },
      data: {
        name: body.name?.trim() ?? undefined,
        description: body.description?.trim() ?? undefined,
        projectFile: storedFileName ?? undefined,
      },
    });
    return { project: this.mapProject(updated) };
  }

  async remove(id: string, ownerId: number) {
    const numericId = this.parseId(id);
    const existing = await this.db.project.findFirst({ where: { id: numericId, ownerId } });
    if (!existing) {
      throw new HttpException({ message: 'Ресурс не найден' }, HttpStatus.NOT_FOUND);
    }
    await this.db.project.update({ where: { id: numericId }, data: { status: 'DELETED' as never } });
  }

  async archive(id: string, ownerId: number) {
    const numericId = this.parseId(id);
    const existing = await this.db.project.findFirst({ where: { id: numericId, ownerId } });
    if (!existing) {
      throw new HttpException({ message: 'Ресурс не найден' }, HttpStatus.NOT_FOUND);
    }
    const project = await this.db.project.update({ where: { id: numericId }, data: { status: 'ARCHIVED' as never } });
    return { project: this.mapProject(project) };
  }

  async restore(id: string, ownerId: number) {
    const numericId = this.parseId(id);
    const existing = await this.db.project.findFirst({ where: { id: numericId, ownerId } });
    if (!existing) {
      throw new HttpException({ message: 'Ресурс не найден' }, HttpStatus.NOT_FOUND);
    }
    const project = await this.db.project.update({ where: { id: numericId }, data: { status: 'ACTIVE' as never } });
    return { project: this.mapProject(project) };
  }

  private validateAndPrepareFile(file: UploadedProjectFile): string {
    if (!file || !file.originalname) {
      throw new HttpException(
        { message: 'Ошибка валидации', errors: { projectFile: ['Файл обязателен'] } },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (file.size > MAX_FILE_SIZE_BYTES) {
      throw new HttpException({ message: 'Файл слишком большой' }, HttpStatus.PAYLOAD_TOO_LARGE);
    }

    const ext = extname(file.originalname).toLowerCase();
    if (!ALLOWED_EXT.has(ext) || (file.mimetype && !ALLOWED_MIME.has(file.mimetype))) {
      throw new HttpException(
        { message: 'Неподдерживаемый тип файла' },
        HttpStatus.UNSUPPORTED_MEDIA_TYPE,
      );
    }

    // Если Multer уже сохранил файл на диск — используем его итоговое имя
    if (file.filename) {
      return file.filename;
    }
    const safeBase = file.originalname.replace(/[^a-zA-Z0-9_.-]/g, '_');
    const unique = `${safeBase.split('.').slice(0, -1).join('.') || 'project'}_${randomUUID()}${ext}`;
    return unique;
  }

  private parseId(id: string): number {
    const n = Number(id);
    if (!Number.isInteger(n) || n <= 0) {
      throw new HttpException(
        { message: 'Ошибка валидации', errors: { id: ['Некорректный идентификатор'] } },
        HttpStatus.BAD_REQUEST,
      );
    }
    return n;
  }

  private mapProject(project: {
    id: number;
    name: string;
    description: string | null;
    projectFile: string | null;
    createdAt: Date;
    updatedAt: Date;
    status: string;
  }) {
    return {
      id: String(project.id),
      name: project.name,
      description: project.description ?? undefined,
      projectFile: project.projectFile ?? undefined,
      createdAt: project.createdAt.toISOString(),
      updatedAt: project.updatedAt.toISOString(),
      status: this.mapStatus(project.status),
    };
  }

  private mapStatus(status: string): 'active' | 'archived' | 'deleted' {
    switch (status) {
      case 'ACTIVE':
        return 'active';
      case 'ARCHIVED':
        return 'archived';
      case 'DELETED':
        return 'deleted';
      default:
        return 'active';
    }
  }
}


