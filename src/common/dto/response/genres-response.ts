import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class GenresResponse {
  @ApiProperty()
  @Expose()
  name: string;
}
