import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'node:path';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import type { UploadedProjectFile } from './types';
import { SessionGuard } from '../auth/session.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { CurrentUser as CurrentUserType } from '../auth/session.guard';

@Controller('projects')
@UseGuards(SessionGuard)
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('projectFile', {
      storage: diskStorage({
        destination: 'uploads/projects',
        filename: (req, file, cb) => {
          const safe = file.originalname.replace(/[^a-zA-Z0-9_.-]/g, '_');
          const ext = extname(safe).toLowerCase();
          const base = safe.split('.').slice(0, -1).join('.') || 'project';
          const unique = `${base}_${Date.now()}${ext}`;
          cb(null, unique);
        },
      }),
    }),
  )
  async create(
    @Body() body: CreateProjectDto,
    @UploadedFile() file: UploadedProjectFile | undefined,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.projectsService.create(body, file, user);
  }

  @Get()
  async list(
    @Query('search') search: string | undefined,
    @Query('status') status: string | undefined,
    @Query('limit') limit: string | undefined,
    @Query('offset') offset: string | undefined,
    @CurrentUser() user: CurrentUserType,
  ) {
    const parsedLimit = limit ? Number(limit) : undefined;
    const parsedOffset = offset ? Number(offset) : undefined;
    return this.projectsService.list({ search, status, limit: parsedLimit, offset: parsedOffset, ownerId: user.id });
  }

  @Get(':id')
  async getById(@Param('id') id: string, @CurrentUser() user: CurrentUserType) {
    return this.projectsService.getById(id, user.id);
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('projectFile', {
      storage: diskStorage({
        destination: 'uploads/projects',
        filename: (req, file, cb) => {
          const safe = file.originalname.replace(/[^a-zA-Z0-9_.-]/g, '_');
          const ext = extname(safe).toLowerCase();
          const base = safe.split('.').slice(0, -1).join('.') || 'project';
          const unique = `${base}_${Date.now()}${ext}`;
          cb(null, unique);
        },
      }),
    }),
  )
  async update(
    @Param('id') id: string,
    @Body() body: UpdateProjectDto,
    @UploadedFile() file: UploadedProjectFile | undefined,
    @CurrentUser() user: CurrentUserType,
  ) {
    return this.projectsService.update(id, body, file, user.id);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string, @CurrentUser() user: CurrentUserType) {
    await this.projectsService.remove(id, user.id);
  }

  @Post(':id/archive')
  async archive(@Param('id') id: string, @CurrentUser() user: CurrentUserType) {
    return this.projectsService.archive(id, user.id);
  }

  @Post(':id/restore')
  async restore(@Param('id') id: string, @CurrentUser() user: CurrentUserType) {
    return this.projectsService.restore(id, user.id);
  }
}


