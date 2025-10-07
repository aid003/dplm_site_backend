import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class GetFileHistoryQueryDto {
  @IsString()
  filePath: string;

  @IsOptional()
  @IsNumber()
  limit?: number = 50;

  @IsOptional()
  @IsNumber()
  offset?: number = 0;
}

export class FileVersionDto {
  id: string;
  fileId: string;
  content: string;
  size: number;
  authorId?: string;
  authorName?: string;
  createdAt: string;
  message?: string;
}

export class FileHistoryResponseDto {
  versions: FileVersionDto[];
  total: number;
  hasMore: boolean;
}

export class RestoreVersionDto {
  @IsString()
  filePath: string;

  @IsString()
  versionId: string;
}

export class CompareVersionsDto {
  @IsString()
  filePath: string;

  @IsString()
  versionId1: string;

  @IsString()
  versionId2: string;
}

export class VersionDiffDto {
  version1: FileVersionDto;
  version2: FileVersionDto;
  diff: string;
  changes: {
    added: number;
    removed: number;
    modified: number;
  };
}
