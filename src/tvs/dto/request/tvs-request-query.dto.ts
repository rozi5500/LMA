import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class TvsRequestQueryDto {
  @ApiPropertyOptional({ type: 'number', minimum: 1, maximum: 500 })
  @IsOptional()
  page: number;
}
