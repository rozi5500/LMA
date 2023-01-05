import { TvsDto } from '../tvs.dto';
import { PickType } from '@nestjs/swagger';

export class TvsResultResponse extends PickType(TvsDto, [
  'id',
  'name',
  'original_name',
  'backdrop_path',
  'poster_path',
  'vote_average',
]) {}
