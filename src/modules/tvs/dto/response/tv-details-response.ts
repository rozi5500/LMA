import { ApiProperty, OmitType } from '@nestjs/swagger';
import { ResultsResponse } from '../../../../common/dto/response/results-response.dto';
import { TV } from '../../entity/tvs.entity';
import { Expose, plainToClass, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { GenresResponse } from '../../../../common/dto/response/genres-response';
import {
  AppendToResponseImagesResponse,
  AppendToResponseVideosResponse,
} from '../../../../common/dto/response/append_to_response-response';

export class TvDetailsResponse extends OmitType(ResultsResponse, [
  'id',
  'title',
  'media_type',
]) {
  @ApiProperty()
  @Expose()
  original_name: string;

  @ApiProperty()
  @Expose()
  first_air_date: string;

  @ApiProperty()
  @Expose()
  languages: string[];

  @ApiProperty({ isArray: true })
  @Expose()
  @Type(() => GenresResponse)
  @ValidateNested()
  genres: GenresResponse[];

  @ApiProperty()
  @Expose()
  number_of_episodes: number;

  @ApiProperty()
  @Expose()
  number_of_seasons: number;

  @ApiProperty()
  @Expose()
  overview: string;

  @ApiProperty({ isArray: true })
  @Expose()
  @Type(() => AppendToResponseVideosResponse)
  @ValidateNested()
  videos: AppendToResponseVideosResponse[];

  @ApiProperty({ isArray: true })
  @Expose()
  @Type(() => AppendToResponseImagesResponse)
  @ValidateNested()
  images: AppendToResponseImagesResponse[];

  static mapForm(tv: TV): TvDetailsResponse {
    return plainToClass(TvDetailsResponse, tv, {
      excludeExtraneousValues: true,
    });
  }
}
