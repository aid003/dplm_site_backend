import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty({ message: 'Название проекта обязательно' })
  @MaxLength(100)
  name!: string;

  @IsString()
  @IsOptional()
  description?: string;
}


