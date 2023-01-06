import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class MoviesQueryDto {
  @ApiPropertyOptional()
  @IsOptional()
  page: number;
}
