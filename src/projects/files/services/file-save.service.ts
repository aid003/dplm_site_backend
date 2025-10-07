import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../database/database.service';
import { LoggerService } from '../../../logger/logger.service';
import { FilesGateway } from '../files.gateway';
import { SaveFileContentDto, SaveFileContentResponseDto } from '../dto/file-content.dto';
import { FileType, FilePermissions } from '../../../../generated/prisma';

@Injectable()
export class FileSaveService {
  private readonly MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  constructor(
    private readonly db: DatabaseService,
    private readonly logger: LoggerService,
    private readonly filesGateway: FilesGateway,
  ) {}

  async saveFileContent(projectId: string, dto: SaveFileContentDto, userId: number): Promise<SaveFileContentResponseDto> {
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

    // Проверяем права на запись
    if (file.permissions === FilePermissions.READ_ONLY && !await this.isProjectOwner(numericProjectId, userId)) {
      throw new HttpException('Нет прав на запись файла', HttpStatus.FORBIDDEN);
    }

    // Проверяем конфликт изменений
    if (dto.lastModified && file.updatedAt.toISOString() !== dto.lastModified) {
      throw new HttpException('Файл был изменен другим пользователем', HttpStatus.CONFLICT);
    }

    // Проверяем размер файла
    if (dto.content.length > this.MAX_FILE_SIZE) {
      throw new HttpException('Файл слишком большой', HttpStatus.PAYLOAD_TOO_LARGE);
    }

    // Создаем версию перед обновлением
    await this.createFileVersion(file.id, dto.content, userId, dto.message);

    // Обновляем файл
    const updatedFile = await this.db.projectFile.update({
      where: { id: file.id },
      data: {
        content: dto.content,
        size: Buffer.byteLength(dto.content, dto.encoding === 'utf16' ? 'utf16le' : 'utf8'),
        updatedAt: new Date(),
      },
    });

    // Удаляем draft после успешного сохранения
    await this.deleteDraft(numericProjectId, file.id, userId);

    // Уведомляем других пользователей через WebSocket
    this.filesGateway.notifyFileChanged(numericProjectId, {
      type: 'file_saved',
      filePath: normalizedPath,
      userId,
      timestamp: new Date().toISOString(),
    });

    return {
      id: String(updatedFile.id),
      path: updatedFile.path,
      name: updatedFile.name,
      size: updatedFile.size,
      mimeType: updatedFile.mimeType || undefined,
      permissions: updatedFile.permissions,
      updatedAt: updatedFile.updatedAt.toISOString(),
      version: await this.getFileVersionCount(file.id),
    };
  }

  private async createFileVersion(fileId: number, content: string, authorId: number, message?: string): Promise<void> {
    await this.db.fileVersion.create({
      data: {
        projectId: await this.getProjectIdByFileId(fileId),
        fileId,
        content,
        size: Buffer.byteLength(content, 'utf8'),
        authorId,
        message,
      },
    });
  }

  private async getProjectIdByFileId(fileId: number): Promise<number> {
    const file = await this.db.projectFile.findUnique({
      where: { id: fileId },
      select: { projectId: true },
    });
    if (!file) {
      throw new HttpException('Файл не найден', HttpStatus.NOT_FOUND);
    }
    return file.projectId;
  }

  private async getFileVersionCount(fileId: number): Promise<number> {
    return this.db.fileVersion.count({
      where: { fileId },
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

  private async isProjectOwner(projectId: number, userId: number): Promise<boolean> {
    const project = await this.db.project.findFirst({
      where: {
        id: projectId,
        ownerId: userId,
      },
    });

    return !!project;
  }

  private async deleteDraft(projectId: number, fileId: number, userId: number): Promise<void> {
    await this.db.fileDraft.deleteMany({
      where: {
        projectId,
        fileId,
        authorId: userId,
      },
    });
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
