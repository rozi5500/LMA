import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { MoviesPagination } from '../../../modules/movies/dto/request/movies-query.dto';

export class QueryParamDto extends MoviesPagination {
  @ApiPropertyOptional()
  @IsOptional()
  query: string;
}
