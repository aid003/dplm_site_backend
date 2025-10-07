import { IsOptional, IsString, IsEnum, IsBoolean } from 'class-validator';
import { FileType, FilePermissions } from '../../../../generated/prisma';

export class FileTreeItemDto {
  id: string;
  path: string;
  name: string;
  type: FileType;
  size: number;
  mimeType?: string;
  permissions: FilePermissions;
  createdAt: string;
  updatedAt: string;
  childrenCount?: number;
  children?: FileTreeItemDto[];
  hasChildren?: boolean;
  expanded?: boolean;
}

export class GetFileTreeQueryDto {
  @IsOptional()
  @IsString()
  path?: string;

  @IsOptional()
  @IsBoolean()
  includeSystemFiles?: boolean;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsBoolean()
  lazy?: boolean;

  @IsOptional()
  @IsBoolean()
  loadChildren?: boolean;
}

export class FileTreeResponseDto {
  items: FileTreeItemDto[];
  total: number;
}
