import { Module } from '@nestjs/common';
import { TvsService } from './tvs.service';
import { TvsController } from './tvs.controller';

@Module({
  providers: [TvsService],
  controllers: [TvsController],
})
export class TvsModule {}
