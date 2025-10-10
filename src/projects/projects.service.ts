import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { extname, join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { DatabaseService } from '../database/database.service';
import { LoggerService } from '../logger/logger.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectStatsResponseDto } from './dto/project-stats.dto';
import { UploadedProjectFile } from './types';
import { ProjectUnpackService } from './services/project-unpack.service';

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
  'application/octet-stream', // Fallback для неизвестных типов
]);
const ALLOWED_EXT = new Set(['.zip', '.rar']);

@Injectable()
export class ProjectsService {
  constructor(
    private readonly db: DatabaseService,
    private readonly logger: LoggerService,
    private readonly projectUnpackService: ProjectUnpackService,
  ) {}

  async create(body: CreateProjectDto, file: UploadedProjectFile | undefined, user?: { id: number }) {
    this.logger.log(`Creating project: ${body.name}, user: ${user?.id}`, 'ProjectsService');
    
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
      this.logger.error('No file provided', 'ProjectsService');
      throw new HttpException(
        {
          message: 'Ошибка валидации',
          errors: { projectFile: ['Файл проекта обязателен'] },
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    this.logger.log(`File received: ${file.originalname}, size: ${file.size}, mimetype: ${file.mimetype}`, 'ProjectsService');
    
    const storedFileName = this.validateAndPrepareFile(file);
    this.logger.log(`File validated, stored as: ${storedFileName}`, 'ProjectsService');

    // Создаем проект в БД
    const project = await this.db.project.create({
      data: {
        name: body.name.trim(),
        description: body.description?.trim() || null,
        projectFile: storedFileName,
        ownerId: user?.id ?? null,
      },
    });

    // Распаковываем архив и преобразуем в БД
    try {
      const archivePath = join('uploads/projects', storedFileName);
      const unpackResult = await this.projectUnpackService.unpackProject(
        project.id,
        archivePath,
        user?.id ?? 0,
      );

      this.logger.log(`Проект ${project.id} успешно распакован: ${unpackResult.filesCount} файлов, ${unpackResult.directoriesCount} папок`, 'ProjectsService');
      
      if (unpackResult.errors && unpackResult.errors.length > 0) {
        this.logger.warn(`Предупреждения при распаковке проекта ${project.id}: ${unpackResult.errors.join(', ')}`, 'ProjectsService');
      }
    } catch (error) {
      this.logger.error(`Ошибка распаковки проекта ${project.id}: ${error.message}`, 'ProjectsService');
      // Не удаляем проект, просто логируем ошибку
    }

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
    
    // Очищаем распакованные файлы
    try {
      await this.projectUnpackService.cleanupUnpackedProject(numericId);
    } catch (error) {
      this.logger.warn(`Не удалось очистить распакованные файлы проекта ${numericId}: ${error.message}`, 'ProjectsService');
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
    
    // Логируем информацию о файле для отладки
    this.logger.log(`Validating file: ${file.originalname}, ext: ${ext}, mimetype: ${file.mimetype}, size: ${file.size}`, 'ProjectsService');
    
    if (!ALLOWED_EXT.has(ext)) {
      throw new HttpException(
        { message: `Неподдерживаемое расширение файла: ${ext}` },
        HttpStatus.UNSUPPORTED_MEDIA_TYPE,
      );
    }
    
    // Временно отключаем проверку MIME-типа для отладки
    if (file.mimetype && !ALLOWED_MIME.has(file.mimetype)) {
      this.logger.warn(`Неизвестный MIME-тип: ${file.mimetype}, но продолжаем обработку`, 'ProjectsService');
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

  /**
   * Получает статистику проекта
   */
  async getProjectStats(id: string, ownerId: number): Promise<ProjectStatsResponseDto> {
    const numericId = this.parseId(id);
    const existing = await this.db.project.findFirst({ where: { id: numericId, ownerId } });
    if (!existing) {
      throw new HttpException({ message: 'Ресурс не найден' }, HttpStatus.NOT_FOUND);
    }

    try {
      const stats = await this.projectUnpackService.getProjectStats(numericId);
      return {
        projectId: String(numericId),
        projectName: existing.name,
        ...stats,
      };
    } catch (error) {
      this.logger.error(`Ошибка получения статистики проекта ${numericId}: ${error.message}`, 'ProjectsService');
      throw new HttpException(
        `Ошибка получения статистики проекта: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}


