import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { CacheModule } from '@nestjs/cache-manager';
import { DatabaseModule } from '../database/database.module';
import { LoggerModule } from '../logger/logger.module';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { ProjectUnpackService } from './services/project-unpack.service';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    DatabaseModule,
    LoggerModule,
    CacheModule.register({
      ttl: 300, // 5 минут по умолчанию
      max: 1000, // максимум 1000 элементов в кэше
    }),
    MulterModule.register({
      limits: { fileSize: 100 * 1024 * 1024 },
    }),
    FilesModule,
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService, ProjectUnpackService],
})
export class ProjectsModule {}


