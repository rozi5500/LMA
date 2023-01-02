import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { TvsModule } from './tvs/tvs.module';

@Module({
  imports: [MoviesModule, TvsModule],
})
export class AppModule {}
