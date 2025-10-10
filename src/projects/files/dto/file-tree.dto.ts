import { IsOptional, IsString, IsEnum, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';
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
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    return value;
  })
  includeSystemFiles?: boolean;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    return value;
  })
  lazy?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    return value;
  })
  loadChildren?: boolean;
}

export class FileTreeResponseDto {
  items: FileTreeItemDto[];
  total: number;
}
