import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class MoviesPagination {
  @ApiPropertyOptional()
  @IsOptional()
  page: number;
}
