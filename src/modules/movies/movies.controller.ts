import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MoviesService } from './movies.service';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @ApiOperation({ summary: '[Get popular movies]' })
  @Get('popular')
  async getPopularMovies(): Promise<any> {
    return this.moviesService.getPopularMovies();
  }
}
