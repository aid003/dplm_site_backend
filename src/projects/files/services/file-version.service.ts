import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../database/database.service';
import { LoggerService } from '../../../logger/logger.service';
import { FilesGateway } from '../files.gateway';
import { GetFileHistoryQueryDto, FileHistoryResponseDto, RestoreVersionDto, CompareVersionsDto, VersionDiffDto } from '../dto/file-history.dto';
import { FileType } from '../../../../generated/prisma';

@Injectable()
export class FileVersionService {
  constructor(
    private readonly db: DatabaseService,
    private readonly logger: LoggerService,
    private readonly filesGateway: FilesGateway,
  ) {}

  async getFileHistory(projectId: string, query: GetFileHistoryQueryDto, userId: number): Promise<FileHistoryResponseDto> {
    const numericProjectId = this.parseId(projectId);

    await this.checkProjectAccess(numericProjectId, userId);

    const normalizedPath = this.normalizePath(query.filePath);

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

    const [versions, total] = await this.db.$transaction([
      this.db.fileVersion.findMany({
        where: { fileId: file.id },
        orderBy: { createdAt: 'desc' },
        skip: query.offset || 0,
        take: query.limit || 50,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      }),
      this.db.fileVersion.count({
        where: { fileId: file.id },
      }),
    ]);

    const hasMore = (query.offset || 0) + (query.limit || 50) < total;

    return {
      versions: versions.map(version => ({
        id: String(version.id),
        fileId: String(version.fileId),
        content: version.content,
        size: version.size,
        authorId: version.authorId ? String(version.authorId) : undefined,
        authorName: version.author?.name || version.author?.email || 'Неизвестный',
        createdAt: version.createdAt.toISOString(),
        message: version.message || undefined,
      })),
      total,
      hasMore,
    };
  }

  async restoreVersion(projectId: string, dto: RestoreVersionDto, userId: number): Promise<any> {
    const numericProjectId = this.parseId(projectId);

    await this.checkProjectAccess(numericProjectId, userId);

    const normalizedPath = this.normalizePath(dto.filePath);
    const versionId = this.parseId(dto.versionId);

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

    const version = await this.db.fileVersion.findFirst({
      where: {
        id: versionId,
        fileId: file.id,
      },
    });

    if (!version) {
      throw new HttpException('Версия не найдена', HttpStatus.NOT_FOUND);
    }

    // Создаем новую версию с текущим содержимым перед восстановлением
    await this.createFileVersion(file.id, file.content || '', userId, 'Автосохранение перед восстановлением');

    // Восстанавливаем содержимое файла
    const updatedFile = await this.db.projectFile.update({
      where: { id: file.id },
      data: {
        content: version.content,
        size: version.size,
        updatedAt: new Date(),
      },
    });

    // Создаем новую версию с восстановленным содержимым
    await this.createFileVersion(file.id, version.content, userId, `Восстановлено из версии ${versionId}`);

    this.filesGateway.notifyFileChanged(numericProjectId, {
      type: 'file_restored',
      filePath: normalizedPath,
      versionId: String(versionId),
      userId: String(userId),
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      message: 'Версия успешно восстановлена',
      file: {
        id: String(updatedFile.id),
        path: updatedFile.path,
        name: updatedFile.name,
        type: updatedFile.type,
        size: updatedFile.size,
        createdAt: updatedFile.createdAt.toISOString(),
        updatedAt: updatedFile.updatedAt.toISOString(),
      },
    };
  }

  async compareVersions(projectId: string, dto: CompareVersionsDto, userId: number): Promise<VersionDiffDto> {
    const numericProjectId = this.parseId(projectId);

    await this.checkProjectAccess(numericProjectId, userId);

    const normalizedPath = this.normalizePath(dto.filePath);
    const versionId1 = this.parseId(dto.versionId1);
    const versionId2 = this.parseId(dto.versionId2);

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

    const [version1, version2] = await this.db.$transaction([
      this.db.fileVersion.findFirst({
        where: { id: versionId1, fileId: file.id },
        include: { author: { select: { name: true, email: true } } },
      }),
      this.db.fileVersion.findFirst({
        where: { id: versionId2, fileId: file.id },
        include: { author: { select: { name: true, email: true } } },
      }),
    ]);

    if (!version1 || !version2) {
      throw new HttpException('Одна или обе версии не найдены', HttpStatus.NOT_FOUND);
    }

    // Простое сравнение строк (можно заменить на более сложный алгоритм diff)
    const diff = this.generateSimpleDiff(version1.content, version2.content);

    return {
      version1: {
        id: String(version1.id),
        fileId: String(version1.fileId),
        content: version1.content,
        size: version1.size,
        authorId: version1.authorId ? String(version1.authorId) : undefined,
        authorName: version1.author?.name || version1.author?.email || 'Неизвестный',
        createdAt: version1.createdAt.toISOString(),
        message: version1.message || undefined,
      },
      version2: {
        id: String(version2.id),
        fileId: String(version2.fileId),
        content: version2.content,
        size: version2.size,
        authorId: version2.authorId ? String(version2.authorId) : undefined,
        authorName: version2.author?.name || version2.author?.email || 'Неизвестный',
        createdAt: version2.createdAt.toISOString(),
        message: version2.message || undefined,
      },
      diff,
      changes: {
        added: diff.split('\n').filter(line => line.startsWith('+')).length,
        removed: diff.split('\n').filter(line => line.startsWith('-')).length,
        modified: diff.split('\n').filter(line => line.startsWith(' ')).length,
      },
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

  private generateSimpleDiff(content1: string, content2: string): string {
    const lines1 = content1.split('\n');
    const lines2 = content2.split('\n');
    const diff: string[] = [];

    const maxLines = Math.max(lines1.length, lines2.length);

    for (let i = 0; i < maxLines; i++) {
      const line1 = lines1[i] || '';
      const line2 = lines2[i] || '';

      if (line1 === line2) {
        diff.push(` ${line1}`);
      } else if (!line1) {
        diff.push(`+${line2}`);
      } else if (!line2) {
        diff.push(`-${line1}`);
      } else {
        diff.push(`-${line1}`);
        diff.push(`+${line2}`);
      }
    }

    return diff.join('\n');
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
