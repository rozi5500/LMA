import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MoviesService } from './movies.service';
import {
  MoviesPagination,
  MoviesQueryDto,
} from './dto/request/movies-query.dto';
import { MoviesResponse } from './dto/response/movies-response.dto';
import { MoviesSearchResponse } from './dto/response/movies-search-response';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get('popular')
  @ApiResponse({ type: MoviesResponse })
  @ApiOperation({ summary: '[Get popular movies]' })
  async getPopularMovies(
    @Query() query: MoviesPagination,
  ): Promise<MoviesResponse> {
    const res = await this.moviesService.getPopularMovies(query.page);

    return MoviesResponse.mapForm(res);
  }

  @Get('search')
  async getMoviesBySearch(
    @Query() query: MoviesQueryDto,
  ): Promise<MoviesSearchResponse> {
    const res = await this.moviesService.getMoviesBySearch(query);
    return MoviesSearchResponse.mapForm(res);
  }
}
