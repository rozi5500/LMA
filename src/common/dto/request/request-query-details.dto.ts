import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class RequestQueryDetailsDto {
  @ApiPropertyOptional()
  @IsOptional()
  append_to_response: string;
}
