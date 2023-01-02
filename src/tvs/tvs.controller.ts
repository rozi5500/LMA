import { Controller, Get } from '@nestjs/common';

@Controller('tv')
export class TvsController {
  @Get()
  async getPopularMovies() {
    return 'HELLO WORLD!';
  }
}
