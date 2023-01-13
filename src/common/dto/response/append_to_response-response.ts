import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

export class VideosResponse {
  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  key: string;

  @ApiProperty()
  @Expose()
  site: string;

  @ApiProperty()
  @Expose()
  size: string;

  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  type: string;
}

export class AppendToResponseImagesResponse {
  @ApiProperty({ isArray: true })
  @Expose()
  @ValidateNested()
  backdrops: object[];
}

export class AppendToResponseVideosResponse {
  @ApiProperty()
  @Expose()
  @Type(() => VideosResponse)
  @ValidateNested()
  results: VideosResponse[];
}
