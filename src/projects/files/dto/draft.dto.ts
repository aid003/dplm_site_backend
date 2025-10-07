import { IsString, IsOptional, IsEnum } from 'class-validator';
import type { FileEncoding } from './file-content.dto';

export class SaveDraftDto {
  @IsString()
  filePath: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsEnum(['utf8', 'utf16', 'ascii', 'latin1'])
  encoding?: FileEncoding = 'utf8';
}

export class DraftDto {
  id: string;
  fileId: string;
  filePath: string;
  content: string;
  encoding: FileEncoding;
  createdAt: string;
  updatedAt: string;
}

export class GetDraftsResponseDto {
  drafts: DraftDto[];
  total: number;
}

export class RestoreDraftDto {
  @IsString()
  filePath: string;

  @IsString()
  draftId: string;
}
