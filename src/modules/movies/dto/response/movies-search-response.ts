import { MoviesResponse } from './movies-response.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToClass } from 'class-transformer';
import { Movie } from '../../entity/movie.entity';

// TODO ADD Media type and other properties
export class MoviesSearchResponse extends MoviesResponse {
  @ApiProperty()
  @Expose()
  media_type: string;

  static mapForm(movie: Movie): MoviesSearchResponse {
    return plainToClass(MoviesSearchResponse, movie, {
      excludeExtraneousValues: true,
    });
  }
}
