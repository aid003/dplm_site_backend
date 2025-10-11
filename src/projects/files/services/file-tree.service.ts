import { HttpException, HttpStatus, Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { DatabaseService } from '../../../database/database.service';
import { LoggerService } from '../../../logger/logger.service';
import { GetFileTreeQueryDto, FileTreeItemDto, FileTreeResponseDto } from '../dto/file-tree.dto';
import { FileType, FilePermissions } from '../../../../generated/prisma';
import type { Cache } from 'cache-manager';

@Injectable()
export class FileTreeService {
  private readonly CACHE_FILE_TREE = 'file_tree';
  private readonly CACHE_TTL = 300; // 5 минут
  private readonly MAX_DIRECTORY_DEPTH = 20;
  private readonly SYSTEM_FILES = new Set(['.git', 'node_modules', '.env', '.DS_Store', 'Thumbs.db']);

  constructor(
    private readonly db: DatabaseService,
    private readonly logger: LoggerService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getFileTree(projectId: string, query: GetFileTreeQueryDto, userId: number): Promise<FileTreeResponseDto> {
    const numericProjectId = this.parseId(projectId);

    // Проверяем права доступа к проекту
    await this.checkProjectAccess(numericProjectId, userId);

    const basePath = query.path || '';
    const normalizedPath = this.normalizePath(basePath);

    // Получаем версию кэша для проекта (для инвалидации по версии)
    const versionKey = `${this.CACHE_FILE_TREE}:v:${numericProjectId}`;
    const versionRaw = await this.cacheManager.get<string | number>(versionKey);
    const version = typeof versionRaw === 'number' ? versionRaw : Number(versionRaw || 1);

    // Создаем ключ кэша для структуры файлов проекта
    const lazy = typeof query.lazy === 'string' ? query.lazy === 'true' : !!query.lazy;
    const includeSystemFiles = typeof query.includeSystemFiles === 'string' ? query.includeSystemFiles === 'true' : !!query.includeSystemFiles;
    const cacheKey = this.getCacheKey(this.CACHE_FILE_TREE, `${numericProjectId}:${version}:${normalizedPath}:${lazy}:${includeSystemFiles}:${query.search || ''}`);

    // Пытаемся получить данные из кэша
    const cachedResult = await this.cacheManager.get<FileTreeResponseDto>(cacheKey);
    if (cachedResult) {
      this.logger.log(`File tree loaded from cache for project ${projectId}`);
      return cachedResult;
    }

    // Определяем глубину загрузки в зависимости от режима
    const maxDepth = lazy ? 1 : this.MAX_DIRECTORY_DEPTH;

    // Получаем файлы из базы данных с учетом глубины
    const files = await this.getFilesWithDepth(numericProjectId, normalizedPath, maxDepth);

    // Фильтруем системные файлы если не запрошены
    const filteredFiles = includeSystemFiles
      ? files
      : files.filter(file => !this.SYSTEM_FILES.has(file.name));

    // Применяем поиск если указан
    const searchResults = query.search
      ? filteredFiles.filter(file =>
          file.name.toLowerCase().includes(query.search!.toLowerCase()) ||
          file.path.toLowerCase().includes(query.search!.toLowerCase())
        )
      : filteredFiles;

    const treeItems = await this.buildFileTree(searchResults, normalizedPath, includeSystemFiles, lazy);

    const result = {
      items: treeItems,
      total: searchResults.length,
    };

    // Сохраняем результат в кэш
    await this.cacheManager.set(cacheKey, result, this.CACHE_TTL);

    return result;
  }

  async getDirectoryChildren(projectId: string, path: string, userId: number): Promise<FileTreeResponseDto> {
    const numericProjectId = this.parseId(projectId);

    // Проверяем права доступа к проекту
    await this.checkProjectAccess(numericProjectId, userId);

    const normalizedPath = this.normalizePath(path);
    const parentPath = normalizedPath.endsWith('/') ? normalizedPath : normalizedPath + '/';

    // Получаем только прямых потомков указанной директории
    const children = await this.db.projectFile.findMany({
      where: {
        projectId: numericProjectId,
        path: {
          startsWith: parentPath,
          not: parentPath, // Исключаем саму директорию
        },
      },
      orderBy: [
        { type: 'asc' }, // Сначала папки
        { name: 'asc' },
      ],
    });

    // Фильтруем по первому уровню вложенности
    const directChildren = children.filter(child => {
      const relativePath = child.path.substring(parentPath.length);
      return !relativePath.includes('/');
    });

    // Фильтруем системные файлы если не запрошены
    const filteredChildren = directChildren.filter(file => !this.SYSTEM_FILES.has(file.name));

    const treeItems = await this.buildFileTree(filteredChildren, parentPath, false, false);

    return {
      items: treeItems,
      total: filteredChildren.length,
    };
  }

  private async getFilesWithDepth(projectId: number, basePath: string, maxDepth: number): Promise<any[]> {
    const files = await this.db.projectFile.findMany({
      where: {
        projectId,
        path: {
          startsWith: basePath,
        },
      },
      orderBy: [
        { type: 'asc' },
        { name: 'asc' },
      ],
    });

    if (maxDepth === 1) {
      // Для ленивой загрузки загружаем только корневой уровень
      return files.filter(file => {
        if (file.path === basePath) return true;
        if (!basePath) {
          // Если базовый путь пустой, берем файлы первого уровня
          return this.isRootLevel(file.path);
        }
        const relativePath = file.path.substring(basePath.length + (basePath ? 1 : 0));
        return !relativePath.includes('/');
      });
    }

    return files;
  }

  private async buildFileTree(files: any[], basePath: string, includeSystemFiles: boolean, lazy: boolean = false): Promise<FileTreeItemDto[]> {
    const tree: FileTreeItemDto[] = [];
    const pathMap = new Map<string, FileTreeItemDto>();

    // Создаем узлы для всех файлов
    for (const file of files) {
      const item: FileTreeItemDto = {
        id: String(file.id),
        path: file.path,
        name: file.name,
        type: file.type as any,
        size: file.size,
        mimeType: file.mimeType || undefined,
        permissions: file.permissions,
        createdAt: file.createdAt.toISOString(),
        updatedAt: file.updatedAt.toISOString(),
        children: file.type === FileType.DIRECTORY ? [] : undefined,
        childrenCount: file.type === FileType.DIRECTORY ? 0 : undefined,
      };

      pathMap.set(file.path, item);

      // Если это корневой элемент, добавляем в дерево
      if (file.path === basePath || (basePath === '' && this.isRootLevel(file.path))) {
        tree.push(item);
      }
    }

    // Строим иерархию
    for (const file of files) {
      if (file.path !== basePath && file.path.startsWith(basePath)) {
        const relativePath = file.path.substring(basePath.length + (basePath ? 1 : 0));
        const pathParts = relativePath.split('/');

        if (pathParts.length === 1) {
          // Прямой потомок
          const parentPath = basePath;
          const parent = pathMap.get(parentPath);
          if (parent && parent.type === FileType.DIRECTORY) {
            parent.children!.push(pathMap.get(file.path)!);
            parent.childrenCount!++;
          }
        }
      }
    }

    // Для ленивой загрузки определяем, есть ли у папок незагруженные дочерние элементы
    if (lazy) {
      for (const item of tree) {
        if (item.type === FileType.DIRECTORY) {
          // Проверяем, есть ли файлы, начинающиеся с пути этой папки + "/"
          const hasChildren = files.some(file =>
            file.path !== item.path &&
            file.path.startsWith(item.path + '/') &&
            file.path.substring(item.path.length + 1).split('/').length === 1
          );
          item.hasChildren = hasChildren;
          item.expanded = false;
        }
      }
    }

    return tree;
  }

  private async checkProjectAccess(projectId: number, userId: number): Promise<void> {
    console.log(`Проверка доступа к проекту ${projectId} для пользователя ${userId}`);

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

    console.log(`Проект найден: ${!!project}`);
    if (project) {
      console.log(`Владелец проекта: ${project.ownerId}, текущий пользователь: ${userId}`);
    }

    if (!project) {
      console.log(`Доступ запрещен к проекту ${projectId} для пользователя ${userId}`);
      throw new HttpException('Проект не найден или нет доступа', HttpStatus.NOT_FOUND);
    }
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

  private isRootLevel(filePath: string): boolean {
    if (!filePath) return false;
    // Корневой уровень - это файлы с путем, который не содержит слешей
    // или файлы с путем, состоящим только из одного уровня (например, "folder")
    const parts = filePath.split('/');
    return parts.length === 1;
  }
}
