import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ResultsResponse {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  title?: string;

  @ApiProperty()
  @Expose()
  name?: string;

  @ApiProperty()
  @Expose()
  poster_path: string;

  @ApiProperty()
  @Expose()
  vote_average: number;

  @ApiProperty()
  @Expose()
  backdrop_path: number;

  @ApiProperty()
  @Expose()
  media_type: string;
}
