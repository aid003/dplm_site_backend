import { IsString, IsEnum, IsOptional } from 'class-validator';
import { FileType } from '../../../../generated/prisma';

export class CreateFileDto {
  @IsString()
  filePath: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  content?: string;
}

export class CreateDirectoryDto {
  @IsString()
  filePath: string;

  @IsString()
  name: string;
}

export class MoveFileDto {
  @IsString()
  sourcePath: string;

  @IsString()
  targetPath: string;
}

export class CopyFileDto {
  @IsString()
  sourcePath: string;

  @IsString()
  targetPath: string;
}

export class DeleteFileQueryDto {
  @IsString()
  filePath: string;
}

export class FileOperationResponseDto {
  success: boolean;
  message: string;
  file?: {
    id: string;
    path: string;
    name: string;
    type: FileType;
    size: number;
    createdAt: string;
    updatedAt: string;
  };
}
