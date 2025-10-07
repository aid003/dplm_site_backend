import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { DatabaseModule } from '../database/database.module';
import { LoggerModule } from '../logger/logger.module';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    DatabaseModule,
    LoggerModule,
    MulterModule.register({
      storage: memoryStorage(),
      limits: { fileSize: 100 * 1024 * 1024 },
    }),
    FilesModule,
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}


