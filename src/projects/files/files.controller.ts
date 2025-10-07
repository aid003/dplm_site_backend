import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { FilesService } from './files.service';
import { FileContentService } from './services/file-content.service';
import { SessionGuard } from '../../auth/session.guard';
import { CurrentUser } from '../../auth/current-user.decorator';
import type { CurrentUser as CurrentUserType } from '../../auth/session.guard';
import { GetFileTreeQueryDto } from './dto/file-tree.dto';
import { GetFileContentQueryDto, SaveFileContentDto } from './dto/file-content.dto';
import { CreateFileDto, CreateDirectoryDto, MoveFileDto, CopyFileDto, DeleteFileQueryDto } from './dto/file-operations.dto';
import { GetFileHistoryQueryDto, RestoreVersionDto, CompareVersionsDto } from './dto/file-history.dto';
import { SaveDraftDto, RestoreDraftDto } from './dto/draft.dto';

@Controller('projects/:projectId/files')
@UseGuards(SessionGuard)
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly fileContentService: FileContentService,
  ) {}

  @Get('tree')
  async getFileTree(
    @Param('projectId') projectId: string,
    @Query() query: GetFileTreeQueryDto,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.filesService.getFileTree(projectId, query, user.id);
  }

  @Get('tree/children')
  async getDirectoryChildren(
    @Param('projectId') projectId: string,
    @Query('path') path: string,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.filesService.getDirectoryChildren(projectId, path, user.id);
  }

  @Get('content')
  async getFileContent(
    @Param('projectId') projectId: string,
    @Query() query: GetFileContentQueryDto,
    @CurrentUser() user: CurrentUserType,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const result = await this.filesService.getFileContent(projectId, query, user.id);

    // Добавляем ETag в ответ
    const etag = this.fileContentService.generateETag(result);
    res.setHeader('ETag', etag);

    // Проверяем If-None-Match заголовок
    const ifNoneMatch = req.get('If-None-Match');
    if (ifNoneMatch === etag) {
      return res.status(HttpStatus.NOT_MODIFIED).end();
    }

    // Добавляем Cache-Control заголовки
    res.setHeader('Cache-Control', 'public, max-age=300'); // 5 минут

    return res.json(result);
  }

  @Put('content')
  async saveFileContent(
    @Param('projectId') projectId: string,
    @Body() dto: SaveFileContentDto,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.filesService.saveFileContent(projectId, dto, user.id);
  }

  @Post('create-file')
  async createFile(
    @Param('projectId') projectId: string,
    @Body() dto: CreateFileDto,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.filesService.createFile(projectId, dto, user.id);
  }

  @Post('create-directory')
  async createDirectory(
    @Param('projectId') projectId: string,
    @Body() dto: CreateDirectoryDto,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.filesService.createDirectory(projectId, dto, user.id);
  }

  @Delete()
  @HttpCode(204)
  async deleteFile(
    @Param('projectId') projectId: string,
    @Query() query: DeleteFileQueryDto,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.filesService.deleteFile(projectId, query, user.id);
  }

  @Post('move')
  async moveFile(
    @Param('projectId') projectId: string,
    @Body() dto: MoveFileDto,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.filesService.moveFile(projectId, dto, user.id);
  }

  @Post('copy')
  async copyFile(
    @Param('projectId') projectId: string,
    @Body() dto: CopyFileDto,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.filesService.copyFile(projectId, dto, user.id);
  }

  @Get('history')
  async getFileHistory(
    @Param('projectId') projectId: string,
    @Query() query: GetFileHistoryQueryDto,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.filesService.getFileHistory(projectId, query, user.id);
  }

  @Post('restore-version')
  async restoreVersion(
    @Param('projectId') projectId: string,
    @Body() dto: RestoreVersionDto,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.filesService.restoreVersion(projectId, dto, user.id);
  }

  @Post('compare-versions')
  async compareVersions(
    @Param('projectId') projectId: string,
    @Body() dto: CompareVersionsDto,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.filesService.compareVersions(projectId, dto, user.id);
  }

  @Post('draft')
  @HttpCode(204)
  async saveDraft(
    @Param('projectId') projectId: string,
    @Body() dto: SaveDraftDto,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.filesService.saveDraft(projectId, dto, user.id);
  }

  @Get('drafts')
  async getDrafts(
    @Param('projectId') projectId: string,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.filesService.getDrafts(projectId, user.id);
  }

  @Post('restore-draft')
  async restoreDraft(
    @Param('projectId') projectId: string,
    @Body() dto: RestoreDraftDto,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.filesService.restoreDraft(projectId, dto, user.id);
  }
}
