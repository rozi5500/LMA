import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TvsDto {
  @ApiProperty({ example: '38657' })
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  poster_path: string;

  @ApiProperty({ example: 3300.207 })
  @Expose()
  popularity: number;

  @ApiProperty({ example: '/hFFAYkK8XkvIlQss9GYxo8TOhFi.jpg' })
  @Expose()
  backdrop_path: string;

  @ApiProperty({ example: 8.7 })
  @Expose()
  vote_average: number;

  @ApiProperty({
    example:
      'More than a thousand years before the world of The Witcher,' +
      ' seven outcasts in the elven world unite in a blood quest against' +
      ' an unstoppable power.',
  })
  @Expose()
  overview: string;

  @ApiProperty({ example: '2022-12-25' })
  @Expose()
  first_air_date: string;

  @ApiProperty({ example: ['US'] })
  @Expose()
  origin_country: string[];

  @ApiProperty({ example: [34981, 51993] })
  @Expose()
  genre_ids: number[];

  @ApiProperty({ example: 'en' })
  @Expose()
  original_language: string;

  @ApiProperty({})
  @Expose()
  vote_count: number;

  @ApiProperty({})
  @Expose()
  name: string;

  @ApiProperty({})
  @Expose()
  original_name: string;
}
