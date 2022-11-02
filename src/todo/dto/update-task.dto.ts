import { IsEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsEmpty()
  @IsString()
  title: string;

  @IsOptional()
  description?: string;
}
