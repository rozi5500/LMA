import { Module } from '@nestjs/common';
import { MoviesModule } from './modules/movies/movies.module';
import { TvsModule } from './modules/tvs/tvs.module';

@Module({
  imports: [MoviesModule, TvsModule],
})
export class AppModule {}
