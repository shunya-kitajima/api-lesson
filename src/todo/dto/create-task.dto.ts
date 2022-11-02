import { IsEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsEmpty()
  @IsString()
  title: string;

  @IsOptional()
  description?: string;
}
