import { Controller, Get, Header, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TvsService } from './tvs.service';
import { TvsRequestQueryDto } from './dto/request/tvs-request-query.dto';
import { TvsResponse } from './dto/response/tvs-response';

@ApiTags('tv')
@Controller('tv')
export class TvsController {
  constructor(private tvsService: TvsService) {}

  @Header('Access-Control-Allow-Origin', '*')
  @Get('popular')
  @ApiOperation({ summary: '[GetPopularTVs]' })
  @ApiResponse({ type: TvsResponse })
  async getPopularTVs(@Query() query: TvsRequestQueryDto) {
    const tvs = await this.tvsService.getPopularTVs(query);

    return TvsResponse.mapForm(tvs);
  }
}
