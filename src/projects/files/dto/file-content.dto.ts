import { IsString, IsOptional, IsEnum, IsNumber, IsDateString } from 'class-validator';

export type FileEncoding = 'utf8' | 'utf16' | 'ascii' | 'latin1';

export class GetFileContentQueryDto {
  @IsString()
  filePath: string;

  @IsOptional()
  @IsEnum(['utf8', 'utf16', 'ascii', 'latin1'])
  encoding?: FileEncoding = 'utf8';

  @IsOptional()
  @IsNumber()
  startLine?: number = 1;

  @IsOptional()
  @IsNumber()
  endLine?: number;

  @IsOptional()
  @IsNumber()
  maxLines?: number = 1000;
}

export class FileContentResponseDto {
  id: string;
  path: string;
  name: string;
  content: string;
  size: number;
  mimeType?: string;
  encoding: FileEncoding;
  permissions: string;
  createdAt: string;
  updatedAt: string;
  lastModified?: string;
  etag?: string;
  pagination?: {
    startLine: number;
    endLine: number;
    totalLines: number;
    hasMore: boolean;
    currentPageSize: number;
  };
  warnings?: {
    largeFile: boolean;
    performanceWarning?: string;
    recommendedPageSize?: number;
  };
}

export class SaveFileContentDto {
  @IsString()
  filePath: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsEnum(['utf8', 'utf16', 'ascii', 'latin1'])
  encoding?: FileEncoding = 'utf8';

  @IsOptional()
  @IsDateString()
  lastModified?: string;

  @IsOptional()
  @IsString()
  message?: string;
}

export class SaveFileContentResponseDto {
  id: string;
  path: string;
  name: string;
  size: number;
  mimeType?: string;
  permissions: string;
  updatedAt: string;
  version: number;
}
