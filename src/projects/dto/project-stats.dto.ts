export class ProjectStatsResponseDto {
  projectId: string;
  projectName: string;
  totalFiles: number;
  totalDirectories: number;
  totalSize: number;
  fileTypes: Record<string, number>;
}
