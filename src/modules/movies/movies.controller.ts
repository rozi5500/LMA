import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MoviesService } from './movies.service';
import { MoviesQueryDto } from './dto/request/movies-query.dto';
import { MoviesResponse } from './dto/response/movies-response.dto';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get('popular')
  @ApiResponse({ type: MoviesResponse })
  @ApiOperation({ summary: '[Get popular movies]' })
  async getPopularMovies(
    @Query() query: MoviesQueryDto,
  ): Promise<MoviesResponse> {
    const res = await this.moviesService.getPopularMovies(query.page);

    return MoviesResponse.mapForm(res);
  }
}
