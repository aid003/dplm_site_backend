import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../database/database.service';
import { SaveDraftDto, DraftDto, GetDraftsResponseDto, RestoreDraftDto } from '../dto/draft.dto';
import { FileType } from '../../../../generated/prisma';

@Injectable()
export class FileDraftService {
  constructor(
    private readonly db: DatabaseService,
  ) {}

  async saveDraft(projectId: string, dto: SaveDraftDto, userId: number): Promise<void> {
    const numericProjectId = this.parseId(projectId);

    await this.checkProjectAccess(numericProjectId, userId);

    const normalizedPath = this.normalizePath(dto.filePath);

    const file = await this.db.projectFile.findFirst({
      where: {
        projectId: numericProjectId,
        path: normalizedPath,
        type: FileType.FILE,
      },
    });

    if (!file) {
      throw new HttpException('Файл не найден', HttpStatus.NOT_FOUND);
    }

    // Сохраняем или обновляем draft
    await this.db.fileDraft.upsert({
      where: {
        projectId_fileId_authorId: {
          projectId: numericProjectId,
          fileId: file.id,
          authorId: userId,
        },
      },
      create: {
        projectId: numericProjectId,
        fileId: file.id,
        content: dto.content,
        authorId: userId,
      },
      update: {
        content: dto.content,
        updatedAt: new Date(),
      },
    });
  }

  async getDrafts(projectId: string, userId: number): Promise<GetDraftsResponseDto> {
    const numericProjectId = this.parseId(projectId);

    await this.checkProjectAccess(numericProjectId, userId);

    const drafts = await this.db.fileDraft.findMany({
      where: {
        projectId: numericProjectId,
        authorId: userId,
      },
      include: {
        file: {
          select: {
            path: true,
          },
        },
      },
      orderBy: { updatedAt: 'desc' },
    });

    return {
      drafts: drafts.map(draft => ({
        id: String(draft.id),
        fileId: String(draft.fileId),
        filePath: draft.file.path,
        content: draft.content,
        encoding: 'utf8',
        createdAt: draft.createdAt.toISOString(),
        updatedAt: draft.updatedAt.toISOString(),
      })),
      total: drafts.length,
    };
  }

  async restoreDraft(projectId: string, dto: RestoreDraftDto, userId: number): Promise<any> {
    const numericProjectId = this.parseId(projectId);

    await this.checkProjectAccess(numericProjectId, userId);

    const normalizedPath = this.normalizePath(dto.filePath);
    const draftId = this.parseId(dto.draftId);

    const draft = await this.db.fileDraft.findFirst({
      where: {
        id: draftId,
        projectId: numericProjectId,
        authorId: userId,
        file: {
          path: normalizedPath,
        },
      },
      include: {
        file: true,
      },
    });

    if (!draft) {
      throw new HttpException('Черновик не найден', HttpStatus.NOT_FOUND);
    }

    return {
      id: String(draft.file.id),
      path: draft.file.path,
      name: draft.file.name,
      content: draft.content,
      size: Buffer.byteLength(draft.content, 'utf8'),
      mimeType: draft.file.mimeType || undefined,
      encoding: 'utf8',
      permissions: draft.file.permissions,
      createdAt: draft.file.createdAt.toISOString(),
      updatedAt: draft.file.updatedAt.toISOString(),
    };
  }

  async deleteDraft(projectId: number, fileId: number, userId: number): Promise<void> {
    await this.db.fileDraft.deleteMany({
      where: {
        projectId,
        fileId,
        authorId: userId,
      },
    });
  }

  private async checkProjectAccess(projectId: number, userId: number): Promise<void> {
    const project = await this.db.project.findFirst({
      where: {
        id: projectId,
        OR: [
          { ownerId: userId },
          {
            members: {
              some: {
                userId: userId,
              },
            },
          },
        ],
      },
    });

    if (!project) {
      throw new HttpException('Проект не найден или нет доступа', HttpStatus.NOT_FOUND);
    }
  }

  private normalizePath(path: string): string {
    return require('path').normalize(path).replace(/\\/g, '/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
  }

  private parseId(id: string): number {
    const n = Number(id);
    if (!Number.isInteger(n) || n <= 0) {
      throw new HttpException('Некорректный идентификатор', HttpStatus.BAD_REQUEST);
    }
    return n;
  }
}
