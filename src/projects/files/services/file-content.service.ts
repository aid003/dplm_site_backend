import { HttpException, HttpStatus, Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { DatabaseService } from '../../../database/database.service';
import { LoggerService } from '../../../logger/logger.service';
import { GetFileContentQueryDto, FileContentResponseDto } from '../dto/file-content.dto';
import { FileType, FilePermissions } from '../../../../generated/prisma';
import type { Cache } from 'cache-manager';

@Injectable()
export class FileContentService {
  private readonly CACHE_FILE_CONTENT = 'file_content';
  private readonly CACHE_TTL = 300; // 5 минут

  constructor(
    private readonly db: DatabaseService,
    private readonly logger: LoggerService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getFileContent(projectId: string, query: GetFileContentQueryDto, userId: number): Promise<FileContentResponseDto> {
    const numericProjectId = this.parseId(projectId);

    await this.checkProjectAccess(numericProjectId, userId);

    const normalizedPath = this.normalizePath(query.filePath);

    // Создаем ключ кэша для содержимого файла с учетом пагинации
    const paginationKey = query.startLine && query.endLine ?
      `:${query.startLine}-${query.endLine}` : ':full';
    const cacheKey = this.getCacheKey(this.CACHE_FILE_CONTENT, `${numericProjectId}:${normalizedPath}${paginationKey}:${query.encoding || 'utf8'}`);

    // Пытаемся получить данные из кэша
    const cachedResult = await this.cacheManager.get<FileContentResponseDto>(cacheKey);
    if (cachedResult) {
      this.logger.log(`File content loaded from cache for ${normalizedPath}`);
      return cachedResult;
    }

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

    // Проверяем права на чтение
    if (file.permissions === FilePermissions.READ_ONLY && !await this.isProjectOwner(numericProjectId, userId)) {
      throw new HttpException('Нет прав на чтение файла', HttpStatus.FORBIDDEN);
    }

    const fileContent = file.content || '';
    const lines = fileContent.split('\n');

    // Определяем диапазон строк для пагинации
    const startLine = Math.max(1, query.startLine || 1);
    const maxLines = Math.min(query.maxLines || 1000, 5000); // Максимум 5000 строк за раз
    const endLine = query.endLine || Math.min(startLine + maxLines - 1, lines.length);

    // Проверяем границы диапазона
    if (startLine > lines.length) {
      throw new HttpException('Запрошенная строка выходит за границы файла', HttpStatus.BAD_REQUEST);
    }

    const requestedLines = lines.slice(startLine - 1, endLine);
    const paginatedContent = requestedLines.join('\n');

    // Определяем, есть ли еще строки после текущей пагинации
    const hasMoreLines = endLine < lines.length;
    const totalLines = lines.length;

    // Генерируем предупреждения для больших файлов
    const warnings = this.generateFileWarnings(file, totalLines, maxLines);

    const result = {
      id: String(file.id),
      path: file.path,
      name: file.name,
      content: paginatedContent,
      size: Buffer.byteLength(paginatedContent, query.encoding === 'utf16' ? 'utf16le' : 'utf8'),
      mimeType: file.mimeType || undefined,
      encoding: query.encoding || 'utf8',
      permissions: file.permissions,
      createdAt: file.createdAt.toISOString(),
      updatedAt: file.updatedAt.toISOString(),
      etag: this.generateETag({
        path: file.path,
        updatedAt: file.updatedAt.toISOString(),
        size: Buffer.byteLength(paginatedContent, query.encoding === 'utf16' ? 'utf16le' : 'utf8'),
        pagination: {
          startLine,
          endLine,
          totalLines,
          hasMore: hasMoreLines,
          currentPageSize: requestedLines.length,
        },
      }),
      pagination: {
        startLine,
        endLine,
        totalLines,
        hasMore: hasMoreLines,
        currentPageSize: requestedLines.length,
      },
      warnings,
    };

    // Сохраняем результат в кэш (только для полных файлов или часто запрашиваемых диапазонов)
    if (!query.startLine || (endLine - startLine + 1) >= 100) {
      await this.cacheManager.set(cacheKey, result, this.CACHE_TTL);
    }

    return result;
  }

  generateETag(data: any): string {
    const hash = require('crypto').createHash('md5');
    hash.update(JSON.stringify(data));
    return `"${hash.digest('hex')}"`;
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

  private generateFileWarnings(file: any, totalLines: number, maxLines: number): { largeFile: boolean; performanceWarning?: string; recommendedPageSize?: number; } {
    const warnings: { largeFile: boolean; performanceWarning?: string; recommendedPageSize?: number; } = {
      largeFile: false,
    };

    // Определяем большой файл (> 1MB или > 10000 строк)
    const isLargeFile = file.size > 1024 * 1024 || totalLines > 10000;

    if (isLargeFile) {
      warnings.largeFile = true;

      if (totalLines > 50000) {
        warnings.performanceWarning = `Файл содержит ${totalLines.toLocaleString()} строк. Рекомендуется использовать пагинацию для оптимальной производительности.`;
        warnings.recommendedPageSize = 500;
      } else if (totalLines > 20000) {
        warnings.performanceWarning = `Файл содержит ${totalLines.toLocaleString()} строк. Рекомендуется уменьшить размер страницы для лучшей производительности.`;
        warnings.recommendedPageSize = 1000;
      } else if (file.size > 5 * 1024 * 1024) {
        warnings.performanceWarning = `Файл размером ${(file.size / (1024 * 1024)).toFixed(1)}MB может работать медленно.`;
        warnings.recommendedPageSize = 2000;
      }
    }

    return warnings;
  }

  private getCacheKey(prefix: string, key: string): string {
    return `${prefix}:${key}`;
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
