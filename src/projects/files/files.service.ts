import { Injectable } from '@nestjs/common';
import { FileTreeService } from './services/file-tree.service';
import { FileContentService } from './services/file-content.service';
import { FileOperationsService } from './services/file-operations.service';
import { FileVersionService } from './services/file-version.service';
import { FileDraftService } from './services/file-draft.service';
import { FileSaveService } from './services/file-save.service';
import { GetFileTreeQueryDto, FileTreeResponseDto } from './dto/file-tree.dto';
import { GetFileContentQueryDto, FileContentResponseDto, SaveFileContentDto } from './dto/file-content.dto';
import { CreateFileDto, CreateDirectoryDto, MoveFileDto, CopyFileDto, DeleteFileQueryDto, FileOperationResponseDto } from './dto/file-operations.dto';
import { GetFileHistoryQueryDto, FileHistoryResponseDto, RestoreVersionDto, CompareVersionsDto, VersionDiffDto } from './dto/file-history.dto';
import { SaveDraftDto, GetDraftsResponseDto, RestoreDraftDto } from './dto/draft.dto';

/**
 * Основной сервис для работы с файлами проекта.
 * Координирует работу специализированных сервисов для различных операций.
 */
@Injectable()
export class FilesService {
  constructor(
    private readonly fileTreeService: FileTreeService,
    private readonly fileContentService: FileContentService,
    private readonly fileOperationsService: FileOperationsService,
    private readonly fileVersionService: FileVersionService,
    private readonly fileDraftService: FileDraftService,
    private readonly fileSaveService: FileSaveService,
  ) {}

  // ========== ДЕРЕВО ФАЙЛОВ ==========

  async getFileTree(projectId: string, query: GetFileTreeQueryDto, userId: number): Promise<FileTreeResponseDto> {
    return this.fileTreeService.getFileTree(projectId, query, userId);
  }

  async getDirectoryChildren(projectId: string, path: string, userId: number): Promise<FileTreeResponseDto> {
    return this.fileTreeService.getDirectoryChildren(projectId, path, userId);
  }

  // ========== СОДЕРЖИМОЕ ФАЙЛОВ ==========

  async getFileContent(projectId: string, query: GetFileContentQueryDto, userId: number): Promise<FileContentResponseDto> {
    return this.fileContentService.getFileContent(projectId, query, userId);
  }

  async saveFileContent(projectId: string, dto: SaveFileContentDto, userId: number): Promise<FileContentResponseDto> {
    return this.fileSaveService.saveFileContent(projectId, dto, userId);
  }

  // ========== ОПЕРАЦИИ С ФАЙЛАМИ ==========

  async createFile(projectId: string, dto: CreateFileDto, userId: number): Promise<FileOperationResponseDto> {
    return this.fileOperationsService.createFile(projectId, dto, userId);
  }

  async createDirectory(projectId: string, dto: CreateDirectoryDto, userId: number): Promise<FileOperationResponseDto> {
    return this.fileOperationsService.createDirectory(projectId, dto, userId);
  }

  async deleteFile(projectId: string, query: DeleteFileQueryDto, userId: number): Promise<FileOperationResponseDto> {
    return this.fileOperationsService.deleteFile(projectId, query, userId);
  }

  async moveFile(projectId: string, dto: MoveFileDto, userId: number): Promise<FileOperationResponseDto> {
    return this.fileOperationsService.moveFile(projectId, dto, userId);
  }

  async copyFile(projectId: string, dto: CopyFileDto, userId: number): Promise<FileOperationResponseDto> {
    return this.fileOperationsService.copyFile(projectId, dto, userId);
  }

  // ========== ИСТОРИЯ И ВЕРСИОНИРОВАНИЕ ==========

  async getFileHistory(projectId: string, query: GetFileHistoryQueryDto, userId: number): Promise<FileHistoryResponseDto> {
    return this.fileVersionService.getFileHistory(projectId, query, userId);
  }

  async restoreVersion(projectId: string, dto: RestoreVersionDto, userId: number): Promise<any> {
    return this.fileVersionService.restoreVersion(projectId, dto, userId);
  }

  async compareVersions(projectId: string, dto: CompareVersionsDto, userId: number): Promise<VersionDiffDto> {
    return this.fileVersionService.compareVersions(projectId, dto, userId);
  }

  // ========== ЧЕРНОВИКИ ==========

  async saveDraft(projectId: string, dto: SaveDraftDto, userId: number): Promise<void> {
    return this.fileDraftService.saveDraft(projectId, dto, userId);
  }

  async getDrafts(projectId: string, userId: number): Promise<GetDraftsResponseDto> {
    return this.fileDraftService.getDrafts(projectId, userId);
  }

  async restoreDraft(projectId: string, dto: RestoreDraftDto, userId: number): Promise<any> {
    return this.fileDraftService.restoreDraft(projectId, dto, userId);
  }
}