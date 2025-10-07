import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { FilesGateway } from './files.gateway';
import { LoggerModule } from '../../logger/logger.module';
import { DatabaseModule } from '../../database/database.module';

// Сервисы
import { FileTreeService } from './services/file-tree.service';
import { FileContentService } from './services/file-content.service';
import { FileOperationsService } from './services/file-operations.service';
import { FileVersionService } from './services/file-version.service';
import { FileDraftService } from './services/file-draft.service';
import { FileSaveService } from './services/file-save.service';

@Module({
  imports: [
    LoggerModule,
    DatabaseModule,
    CacheModule.register({
      ttl: 300, // 5 минут по умолчанию
      max: 1000, // максимум 1000 элементов в кэше
    }),
  ],
  controllers: [FilesController],
  providers: [
    FilesService,
    FilesGateway,
    FileTreeService,
    FileContentService,
    FileOperationsService,
    FileVersionService,
    FileDraftService,
    FileSaveService,
  ],
  exports: [FilesService],
})
export class FilesModule {}
