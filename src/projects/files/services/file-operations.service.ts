import { HttpException, HttpStatus, Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { DatabaseService } from '../../../database/database.service';
import { LoggerService } from '../../../logger/logger.service';
import { FilesGateway } from '../files.gateway';
import { CreateFileDto, CreateDirectoryDto, MoveFileDto, CopyFileDto, DeleteFileQueryDto, FileOperationResponseDto } from '../dto/file-operations.dto';
import { FileType, FilePermissions } from '../../../../generated/prisma';
import { join, basename, extname } from 'path';
import type { Cache } from 'cache-manager';

@Injectable()
export class FileOperationsService {
  private readonly MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  private readonly ALLOWED_EXTENSIONS = new Set([
    '.js', '.ts', '.jsx', '.tsx', '.json', '.html', '.css', '.scss', '.sass', '.less',
    '.md', '.txt', '.xml', '.yaml', '.yml', '.sql', '.py', '.java', '.cpp', '.c',
    '.php', '.rb', '.go', '.rs', '.vue', '.svelte', '.astro'
  ]);

  constructor(
    private readonly db: DatabaseService,
    private readonly logger: LoggerService,
    private readonly filesGateway: FilesGateway,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async createFile(projectId: string, dto: CreateFileDto, userId: number): Promise<FileOperationResponseDto> {
    const numericProjectId = this.parseId(projectId);

    await this.checkProjectAccess(numericProjectId, userId);

    const normalizedPath = this.normalizePath(dto.filePath);
    const fullPath = join(normalizedPath, dto.name);

    // Проверяем, что файл не существует
    const existingFile = await this.db.projectFile.findFirst({
      where: {
        projectId: numericProjectId,
        path: fullPath,
      },
    });

    if (existingFile) {
      throw new HttpException('Файл уже существует', HttpStatus.CONFLICT);
    }

    // Проверяем расширение файла
    const ext = extname(dto.name).toLowerCase();
    if (!this.ALLOWED_EXTENSIONS.has(ext)) {
      throw new HttpException('Неподдерживаемое расширение файла', HttpStatus.BAD_REQUEST);
    }

    // Создаем файл в базе данных
    const file = await this.db.projectFile.create({
      data: {
        projectId: numericProjectId,
        path: fullPath,
        name: dto.name,
        type: FileType.FILE,
        content: dto.content || '',
        size: Buffer.byteLength(dto.content || '', 'utf8'),
        mimeType: this.getMimeType(dto.name),
        permissions: FilePermissions.READ_WRITE,
      },
    });

    this.filesGateway.notifyFileChanged(numericProjectId, {
      type: 'file_created',
      filePath: fullPath,
      userId: String(userId),
      timestamp: new Date().toISOString(),
    });

    // Инвалидируем кэш после создания файла
    await this.invalidateProjectCache(numericProjectId);

    return {
      success: true,
      message: 'Файл успешно создан',
      file: {
        id: String(file.id),
        path: file.path,
        name: file.name,
        type: file.type,
        size: file.size,
        createdAt: file.createdAt.toISOString(),
        updatedAt: file.updatedAt.toISOString(),
      },
    };
  }

  async createDirectory(projectId: string, dto: CreateDirectoryDto, userId: number): Promise<FileOperationResponseDto> {
    const numericProjectId = this.parseId(projectId);

    await this.checkProjectAccess(numericProjectId, userId);

    const normalizedPath = this.normalizePath(dto.filePath);
    const fullPath = join(normalizedPath, dto.name);

    // Проверяем, что папка не существует
    const existingDir = await this.db.projectFile.findFirst({
      where: {
        projectId: numericProjectId,
        path: fullPath,
      },
    });

    if (existingDir) {
      throw new HttpException('Папка уже существует', HttpStatus.CONFLICT);
    }

    // Создаем папку в базе данных
    const directory = await this.db.projectFile.create({
      data: {
        projectId: numericProjectId,
        path: fullPath,
        name: dto.name,
        type: FileType.DIRECTORY,
        content: null,
        size: 0,
        mimeType: null,
        permissions: FilePermissions.READ_WRITE,
      },
    });

    this.filesGateway.notifyFileChanged(numericProjectId, {
      type: 'directory_created',
      filePath: fullPath,
      userId: String(userId),
      timestamp: new Date().toISOString(),
    });

    // Инвалидируем кэш после создания папки
    await this.invalidateProjectCache(numericProjectId);

    return {
      success: true,
      message: 'Папка успешно создана',
      file: {
        id: String(directory.id),
        path: directory.path,
        name: directory.name,
        type: directory.type,
        size: directory.size,
        createdAt: directory.createdAt.toISOString(),
        updatedAt: directory.updatedAt.toISOString(),
      },
    };
  }

  async deleteFile(projectId: string, query: DeleteFileQueryDto, userId: number): Promise<FileOperationResponseDto> {
    const numericProjectId = this.parseId(projectId);

    await this.checkProjectAccess(numericProjectId, userId);

    const normalizedPath = this.normalizePath(query.filePath);

    const file = await this.db.projectFile.findFirst({
      where: {
        projectId: numericProjectId,
        path: normalizedPath,
      },
    });

    if (!file) {
      throw new HttpException('Файл не найден', HttpStatus.NOT_FOUND);
    }

    // Проверяем права на удаление
    if (file.permissions === FilePermissions.READ_ONLY && !await this.isProjectOwner(numericProjectId, userId)) {
      throw new HttpException('Нет прав на удаление файла', HttpStatus.FORBIDDEN);
    }

    // Если это папка, проверяем, что она пустая
    if (file.type === FileType.DIRECTORY) {
      const children = await this.db.projectFile.findMany({
        where: {
          projectId: numericProjectId,
          path: {
            startsWith: normalizedPath + '/',
          },
        },
      });

      if (children.length > 0) {
        throw new HttpException('Папка не пустая', HttpStatus.BAD_REQUEST);
      }
    }

    // Удаляем файл
    await this.db.projectFile.delete({
      where: { id: file.id },
    });

    // Удаляем связанные версии и drafts
    await this.db.fileVersion.deleteMany({
      where: { fileId: file.id },
    });

    await this.db.fileDraft.deleteMany({
      where: { fileId: file.id },
    });

    this.filesGateway.notifyFileChanged(numericProjectId, {
      type: 'file_deleted',
      filePath: normalizedPath,
      userId: String(userId),
      timestamp: new Date().toISOString(),
    });

    // Инвалидируем кэш после удаления файла
    await this.invalidateProjectCache(numericProjectId);

    return {
      success: true,
      message: 'Файл успешно удален',
    };
  }

  async moveFile(projectId: string, dto: MoveFileDto, userId: number): Promise<FileOperationResponseDto> {
    const numericProjectId = this.parseId(projectId);

    await this.checkProjectAccess(numericProjectId, userId);

    const sourcePath = this.normalizePath(dto.sourcePath);
    const targetPath = this.normalizePath(dto.targetPath);

    const file = await this.db.projectFile.findFirst({
      where: {
        projectId: numericProjectId,
        path: sourcePath,
      },
    });

    if (!file) {
      throw new HttpException('Исходный файл не найден', HttpStatus.NOT_FOUND);
    }

    // Проверяем, что целевой путь не существует
    const existingFile = await this.db.projectFile.findFirst({
      where: {
        projectId: numericProjectId,
        path: targetPath,
      },
    });

    if (existingFile) {
      throw new HttpException('Целевой файл уже существует', HttpStatus.CONFLICT);
    }

    // Обновляем путь файла
    const updatedFile = await this.db.projectFile.update({
      where: { id: file.id },
      data: {
        path: targetPath,
        name: basename(targetPath),
        updatedAt: new Date(),
      },
    });

    this.filesGateway.notifyFileChanged(numericProjectId, {
      type: 'file_moved',
      filePath: targetPath,
      oldPath: sourcePath,
      userId: String(userId),
      timestamp: new Date().toISOString(),
    });

    // Инвалидируем кэш после перемещения файла
    await this.invalidateProjectCache(numericProjectId);

    return {
      success: true,
      message: 'Файл успешно перемещен',
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

  async copyFile(projectId: string, dto: CopyFileDto, userId: number): Promise<FileOperationResponseDto> {
    const numericProjectId = this.parseId(projectId);

    await this.checkProjectAccess(numericProjectId, userId);

    const sourcePath = this.normalizePath(dto.sourcePath);
    const targetPath = this.normalizePath(dto.targetPath);

    const sourceFile = await this.db.projectFile.findFirst({
      where: {
        projectId: numericProjectId,
        path: sourcePath,
      },
    });

    if (!sourceFile) {
      throw new HttpException('Исходный файл не найден', HttpStatus.NOT_FOUND);
    }

    // Проверяем, что целевой путь не существует
    const existingFile = await this.db.projectFile.findFirst({
      where: {
        projectId: numericProjectId,
        path: targetPath,
      },
    });

    if (existingFile) {
      throw new HttpException('Целевой файл уже существует', HttpStatus.CONFLICT);
    }

    // Создаем копию файла
    const copiedFile = await this.db.projectFile.create({
      data: {
        projectId: numericProjectId,
        path: targetPath,
        name: basename(targetPath),
        type: sourceFile.type,
        content: sourceFile.content,
        size: sourceFile.size,
        mimeType: sourceFile.mimeType,
        permissions: sourceFile.permissions,
      },
    });

    this.filesGateway.notifyFileChanged(numericProjectId, {
      type: 'file_copied',
      filePath: targetPath,
      sourcePath: sourcePath,
      userId: String(userId),
      timestamp: new Date().toISOString(),
    });

    // Инвалидируем кэш после копирования файла
    await this.invalidateProjectCache(numericProjectId);

    return {
      success: true,
      message: 'Файл успешно скопирован',
      file: {
        id: String(copiedFile.id),
        path: copiedFile.path,
        name: copiedFile.name,
        type: copiedFile.type,
        size: copiedFile.size,
        createdAt: copiedFile.createdAt.toISOString(),
        updatedAt: copiedFile.updatedAt.toISOString(),
      },
    };
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

  private async invalidateProjectCache(projectId: number): Promise<void> {
    // Версионная инвалидация: увеличиваем версию, которую использует FileTreeService в ключах кэша
    const versionKey = `file_tree:v:${projectId}`;
    try {
      const currentRaw = await this.cacheManager.get<string | number>(versionKey);
      const current = typeof currentRaw === 'number' ? currentRaw : Number(currentRaw || 1);
      const next = current + 1;
      await this.cacheManager.set(versionKey, next, 0);
      this.logger.log(`Bumped file tree cache version for project ${projectId} to ${next}`);
    } catch (e) {
      this.logger.warn(`Failed to bump cache version for project ${projectId}: ${e?.message || e}`);
    }
  }

  private getMimeType(filename: string): string {
    const ext = extname(filename).toLowerCase();
    const mimeTypes: Record<string, string> = {
      '.js': 'application/javascript',
      '.ts': 'application/typescript',
      '.jsx': 'application/javascript',
      '.tsx': 'application/typescript',
      '.json': 'application/json',
      '.html': 'text/html',
      '.css': 'text/css',
      '.scss': 'text/scss',
      '.sass': 'text/sass',
      '.less': 'text/less',
      '.md': 'text/markdown',
      '.txt': 'text/plain',
      '.xml': 'application/xml',
      '.yaml': 'application/yaml',
      '.yml': 'application/yaml',
      '.sql': 'application/sql',
      '.py': 'text/x-python',
      '.java': 'text/x-java',
      '.cpp': 'text/x-c++',
      '.c': 'text/x-c',
      '.php': 'application/x-php',
      '.rb': 'text/x-ruby',
      '.go': 'text/x-go',
      '.rs': 'text/x-rust',
      '.vue': 'text/x-vue',
      '.svelte': 'text/x-svelte',
      '.astro': 'text/x-astro',
    };

    return mimeTypes[ext] || 'text/plain';
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
