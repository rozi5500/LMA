import { Module } from '@nestjs/common';
import { CommonsService } from './commons.service';
import { CommonsController } from './commons.controller';

@Module({
  providers: [CommonsService],
  controllers: [CommonsController],
})
export class CommonsModule {}
