import { Expose, plainToClass, Type } from 'class-transformer';
import { TV } from '../../entity/tvs.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { TvsResultResponse } from './tvs-result-response';

export class TvsResponse {
  @ApiProperty()
  @Expose()
  page: number;

  @ApiProperty({ type: TvsResultResponse, isArray: true })
  @Expose()
  @Type(() => TvsResultResponse)
  @ValidateNested()
  results: TvsResultResponse[];

  @ApiProperty()
  @Expose()
  total_pages: number;

  @ApiProperty()
  @Expose()
  total_results: number;

  static mapForm(tvs: TV): TvsResponse {
    return plainToClass(TvsResponse, tvs, {
      excludeExtraneousValues: true,
    });
  }

  static mapFormMulti(tvs: TV[]): TvsResponse[] {
    return tvs.map(TvsResponse.mapForm);
  }
}
