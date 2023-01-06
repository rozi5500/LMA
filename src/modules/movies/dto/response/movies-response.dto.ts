import { Expose, plainToClass, Type } from 'class-transformer';
import { Movie } from '../../entity/movie.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { MoviesResultsResponse } from './movies-results-response.dto';

export class MoviesResponse {
  @ApiProperty()
  @Expose()
  page: number;

  @ApiProperty({ type: MoviesResultsResponse, isArray: true })
  @Expose()
  @Type(() => MoviesResultsResponse)
  @ValidateNested()
  results: MoviesResultsResponse[];

  @ApiProperty()
  @Expose()
  total_results: number;

  @ApiProperty()
  @Expose()
  total_pages: number;

  static mapForm(movie: Movie): MoviesResponse {
    return plainToClass(MoviesResponse, movie, {
      excludeExtraneousValues: true,
    });
  }
}
