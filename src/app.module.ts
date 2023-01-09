import { Module } from '@nestjs/common';
import { MoviesModule } from './modules/movies/movies.module';
import { TvsModule } from './modules/tvs/tvs.module';
import { CommonsController } from './modules/commons/commons.controller';
import { CommonsService } from './modules/commons/commons.service';
import { CommonsModule } from './modules/commons/commons.module';

@Module({
  imports: [MoviesModule, TvsModule, CommonsModule],
  controllers: [CommonsController],
  providers: [CommonsService],
})
export class AppModule {}
