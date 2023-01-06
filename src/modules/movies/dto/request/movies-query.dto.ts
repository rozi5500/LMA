import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class MoviesPagination {
  @ApiPropertyOptional()
  @IsOptional()
  page: number;
}

export class MoviesQueryDto extends MoviesPagination {
  @ApiPropertyOptional()
  @IsOptional()
  query: string;
}
