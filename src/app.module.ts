import { Module } from '@nestjs/common';
import { MoviesModule } from './modules/movies/movies.module';
import { TvsModule } from './modules/tvs/tvs.module';
import { CommonsController } from './modules/commons/commons.controller';
import { CommonsService } from './modules/commons/commons.service';
import { CommonsModule } from './modules/commons/commons.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MoviesModule,
    TvsModule,
    CommonsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
    }),
  ],
  controllers: [CommonsController],
  providers: [CommonsService],
})
export class AppModule {}
