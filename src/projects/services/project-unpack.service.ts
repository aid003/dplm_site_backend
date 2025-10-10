import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { DatabaseService } from '../../database/database.service';
import { LoggerService } from '../../logger/logger.service';
import { FileType, FilePermissions } from '../../../generated/prisma';
import { join, extname, dirname, basename, relative } from 'path';
import { createReadStream, createWriteStream, mkdirSync, statSync, readdirSync } from 'fs';
import { pipeline } from 'stream/promises';
import { createInterface } from 'readline';
import AdmZip from 'adm-zip';
import * as archiver from 'archiver';

interface UnpackedFile {
  path: string;
  name: string;
  content: string;
  size: number;
  mimeType: string;
  isDirectory: boolean;
}

interface UnpackResult {
  success: boolean;
  filesCount: number;
  directoriesCount: number;
  unpackedPath: string;
  errors?: string[];
}

@Injectable()
export class ProjectUnpackService {
  private readonly MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  private readonly SUPPORTED_EXTENSIONS = new Set([
    '.js', '.ts', '.jsx', '.tsx', '.json', '.html', '.css', '.scss', '.sass', '.less',
    '.md', '.txt', '.xml', '.yaml', '.yml', '.sql', '.py', '.java', '.cpp', '.c',
    '.php', '.rb', '.go', '.rs', '.vue', '.svelte', '.astro', '.jsx', '.tsx',
    '.env', '.gitignore', '.dockerfile', '.dockerignore', '.editorconfig'
  ]);

  private readonly MIME_TYPES: Record<string, string> = {
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
    '.yaml': 'application/x-yaml',
    '.yml': 'application/x-yaml',
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
    '.env': 'text/plain',
    '.gitignore': 'text/plain',
    '.dockerfile': 'text/plain',
    '.dockerignore': 'text/plain',
    '.editorconfig': 'text/plain',
  };

  constructor(
    private readonly db: DatabaseService,
    private readonly logger: LoggerService,
    @Inject(CACHE_MANAGER) private cacheManager: any,
  ) {}

  /**
   * Распаковывает архив проекта в файловую систему и преобразует в БД
   */
  async unpackProject(
    projectId: number,
    archivePath: string,
    userId: number,
  ): Promise<UnpackResult> {
    try {
      this.logger.log(`Начинаем распаковку проекта ${projectId} из ${archivePath}`, 'ProjectUnpackService');

      // Создаем папку для распакованного проекта
      const unpackedPath = await this.createUnpackedDirectory(projectId);
      
      // Распаковываем архив
      const unpackedFiles = await this.extractArchive(archivePath, unpackedPath);
      
      // Преобразуем файлы в структуру БД
      const dbResult = await this.convertToDatabase(projectId, unpackedFiles, userId);

      // После успешной загрузки инкрементируем версию кэша дерева файлов
      try {
        const versionKey = `file_tree:v:${projectId}`;
        const currentRaw = await this.cacheManager.get(versionKey);
        const current = typeof currentRaw === 'number' ? currentRaw : Number(currentRaw || 1);
        const next = current + 1;
        await this.cacheManager.set(versionKey, next, 0);
        this.logger.log(`Bumped file tree cache version for project ${projectId} to ${next}`, 'ProjectUnpackService');
      } catch (e) {
        this.logger.warn(`Failed to bump cache version for project ${projectId}: ${e?.message || e}`, 'ProjectUnpackService');
      }
      
      this.logger.log(`Проект ${projectId} успешно распакован. Файлов: ${dbResult.filesCount}, Папок: ${dbResult.directoriesCount}`, 'ProjectUnpackService');
      
      return {
        success: true,
        filesCount: dbResult.filesCount,
        directoriesCount: dbResult.directoriesCount,
        unpackedPath,
        errors: dbResult.errors,
      };
    } catch (error) {
      this.logger.error(`Ошибка распаковки проекта ${projectId}: ${error.message}`, 'ProjectUnpackService');
      throw new HttpException(
        `Ошибка распаковки проекта: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Создает папку для распакованного проекта
   */
  private async createUnpackedDirectory(projectId: number): Promise<string> {
    const baseDir = 'unpacked/projects';
    const projectDir = join(baseDir, `project_${projectId}`);
    
    try {
      mkdirSync(projectDir, { recursive: true });
      this.logger.log(`Создана папка для проекта: ${projectDir}`, 'ProjectUnpackService');
      return projectDir;
    } catch (error) {
      throw new Error(`Не удалось создать папку проекта: ${error.message}`);
    }
  }

  /**
   * Извлекает файлы из архива
   */
  private async extractArchive(archivePath: string, targetPath: string): Promise<UnpackedFile[]> {
    const files: UnpackedFile[] = [];
    const errors: string[] = [];

    try {
      const zip = new AdmZip(archivePath);
      const entries = zip.getEntries();

      for (const entry of entries) {
        try {
          // Пропускаем служебные файлы macOS
          if (entry.entryName.includes('__MACOSX/') || entry.entryName.startsWith('._')) {
            continue;
          }

          if (entry.isDirectory) {
            // Создаем папку
            const dirPath = join(targetPath, entry.entryName);
            mkdirSync(dirPath, { recursive: true });
            
            files.push({
              path: this.normalizePath(entry.entryName),
              name: basename(entry.entryName),
              content: '',
              size: 0,
              mimeType: '',
              isDirectory: true,
            });
          } else {
            // Извлекаем файл
            const filePath = join(targetPath, entry.entryName);
            const dirPath = dirname(filePath);
            
            // Создаем папки если нужно
            mkdirSync(dirPath, { recursive: true });
            
            // Проверяем расширение файла
            const ext = extname(entry.entryName).toLowerCase();
            if (!this.SUPPORTED_EXTENSIONS.has(ext)) {
              errors.push(`Неподдерживаемое расширение: ${entry.entryName}`);
              continue;
            }

            // Проверяем размер файла
            if (entry.header.size > this.MAX_FILE_SIZE) {
              errors.push(`Файл слишком большой: ${entry.entryName} (${entry.header.size} байт)`);
              continue;
            }

            // Извлекаем содержимое файла
            const buffer = entry.getData();
            
            // Проверяем на нулевые байты (недопустимы в UTF-8 для PostgreSQL)
            if (buffer.includes(0)) {
              errors.push(`Файл содержит недопустимые символы: ${entry.entryName}`);
              continue;
            }
            
            const content = buffer.toString('utf8');
            
            // Сохраняем файл на диск
            try {
              const writeStream = createWriteStream(filePath);
              writeStream.write(content);
              writeStream.end();
              this.logger.log(`Файл сохранен: ${filePath}`, 'ProjectUnpackService');
            } catch (writeError) {
              this.logger.error(`Ошибка записи файла ${filePath}: ${writeError.message}`, 'ProjectUnpackService');
              errors.push(`Ошибка записи файла ${entry.entryName}: ${writeError.message}`);
            }
            
            files.push({
              path: this.normalizePath(entry.entryName),
              name: basename(entry.entryName),
              content,
              size: Buffer.byteLength(content, 'utf8'),
              mimeType: this.getMimeType(entry.entryName),
              isDirectory: false,
            });
          }
        } catch (error) {
          errors.push(`Ошибка обработки ${entry.entryName}: ${error.message}`);
        }
      }

      if (errors.length > 0) {
        this.logger.warn(`Предупреждения при распаковке: ${errors.join(', ')}`, 'ProjectUnpackService');
      }

      return files;
    } catch (error) {
      throw new Error(`Ошибка чтения архива: ${error.message}`);
    }
  }

  /**
   * Преобразует распакованные файлы в структуру БД
   */
  private async convertToDatabase(
    projectId: number,
    files: UnpackedFile[],
    userId: number,
  ): Promise<{ filesCount: number; directoriesCount: number; errors: string[] }> {
    const errors: string[] = [];
    let filesCount = 0;
    let directoriesCount = 0;
    const createdDirectories = new Set<string>();

    try {
      // Сортируем файлы: сначала папки, потом файлы
      const sortedFiles = files.sort((a, b) => {
        if (a.isDirectory && !b.isDirectory) return -1;
        if (!a.isDirectory && b.isDirectory) return 1;
        return a.path.localeCompare(b.path);
      });

      // Вспомогательная функция: гарантирует существование всех промежуточных директорий для указанного пути
      const ensureParentDirectories = async (fullPath: string) => {
        const normalized = this.normalizePath(fullPath);
        if (!normalized) return;
        const parts = normalized.split('/');
        // Для файла: исключаем последний сегмент (имя файла)
        const lastIsFile = !files.find(f => f.path === normalized && f.isDirectory);
        const dirParts = lastIsFile ? parts.slice(0, Math.max(parts.length - 1, 0)) : parts.slice(0, Math.max(parts.length - 1, 0));
        let acc = '';
        for (let i = 0; i < dirParts.length; i++) {
          acc = i === 0 ? dirParts[i] : `${acc}/${dirParts[i]}`;
          if (createdDirectories.has(acc)) continue;
          try {
            const exists = await this.db.projectFile.findFirst({
              where: { projectId, path: acc },
            });
            if (!exists) {
              await this.db.projectFile.create({
                data: {
                  projectId,
                  path: acc,
                  name: basename(acc),
                  type: FileType.DIRECTORY,
                  size: 0,
                  mimeType: null,
                  content: null,
                  permissions: FilePermissions.READ_WRITE,
                },
              });
              directoriesCount++;
            }
            createdDirectories.add(acc);
          } catch (e: any) {
            errors.push(`Ошибка создания директории ${acc}: ${e.message}`);
          }
        }
      };

      // Создаем записи в БД
      for (const file of sortedFiles) {
        try {
          if (file.isDirectory) {
            // Гарантируем наличие родительских директорий
            await ensureParentDirectories(file.path);
            // Создаем саму директорию, если ее еще нет
            const exists = await this.db.projectFile.findFirst({ where: { projectId, path: file.path } });
            if (!exists) {
              await this.db.projectFile.create({
                data: {
                  projectId,
                  path: file.path,
                  name: file.name,
                  type: FileType.DIRECTORY,
                  size: 0,
                  mimeType: null,
                  content: null,
                  permissions: FilePermissions.READ_WRITE,
                },
              });
              directoriesCount++;
            }
            createdDirectories.add(file.path);
          } else {
            // Для файлов также гарантируем наличие всех родительских директорий
            await ensureParentDirectories(file.path);
            // Создаем файл, если его еще нет
            const exists = await this.db.projectFile.findFirst({ where: { projectId, path: file.path } });
            if (!exists) {
              await this.db.projectFile.create({
                data: {
                  projectId,
                  path: file.path,
                  name: file.name,
                  type: FileType.FILE,
                  size: file.size,
                  mimeType: file.mimeType,
                  content: file.content,
                  permissions: FilePermissions.READ_WRITE,
                },
              });
              filesCount++;
            }
          }
        } catch (error) {
          errors.push(`Ошибка создания записи для ${file.path}: ${error.message}`);
        }
      }

      return { filesCount, directoriesCount, errors };
    } catch (error) {
      throw new Error(`Ошибка преобразования в БД: ${error.message}`);
    }
  }

  /**
   * Получает MIME-тип файла по его имени
   */
  private getMimeType(filename: string): string {
    const ext = extname(filename).toLowerCase();
    return this.MIME_TYPES[ext] || 'application/octet-stream';
  }

  /**
   * Нормализует путь файла
   */
  private normalizePath(path: string): string {
    return path
      .replace(/\\/g, '/')
      .replace(/\/+/g, '/')
      .replace(/^\/|\/$/g, '');
  }

  /**
   * Удаляет распакованные файлы проекта
   */
  async cleanupUnpackedProject(projectId: number): Promise<void> {
    try {
      const projectDir = join('unpacked/projects', `project_${projectId}`);
      const fs = require('fs');
      
      if (fs.existsSync(projectDir)) {
        fs.rmSync(projectDir, { recursive: true, force: true });
        this.logger.log(`Удалена папка проекта: ${projectDir}`, 'ProjectUnpackService');
      }
    } catch (error) {
      this.logger.warn(`Не удалось удалить папку проекта ${projectId}: ${error.message}`, 'ProjectUnpackService');
    }
  }

  /**
   * Получает статистику распакованного проекта
   */
  async getProjectStats(projectId: number): Promise<{
    totalFiles: number;
    totalDirectories: number;
    totalSize: number;
    fileTypes: Record<string, number>;
  }> {
    const files = await this.db.projectFile.findMany({
      where: { projectId },
    });

    const stats = {
      totalFiles: 0,
      totalDirectories: 0,
      totalSize: 0,
      fileTypes: {} as Record<string, number>,
    };

    for (const file of files) {
      if (file.type === FileType.DIRECTORY) {
        stats.totalDirectories++;
      } else {
        stats.totalFiles++;
        stats.totalSize += file.size;
        
        const ext = extname(file.name).toLowerCase();
        stats.fileTypes[ext] = (stats.fileTypes[ext] || 0) + 1;
      }
    }

    return stats;
  }
}
