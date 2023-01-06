import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TvsService } from './tvs.service';
import { TvsRequestQueryDto } from './dto/request/tvs-request-query.dto';
import { TvsResponse } from './dto/response/tvs-response';

@ApiTags('tv')
@Controller('tv')
export class TvsController {
  constructor(private tvsService: TvsService) {}

  @Get('popular')
  @ApiOperation({ summary: '[GetPopularTVs]' })
  @ApiResponse({ type: TvsResponse })
  async getPopularTVs(
    @Query() query: TvsRequestQueryDto,
  ): Promise<TvsResponse> {
    const tvs = await this.tvsService.getPopularTVs(query);

    return TvsResponse.mapForm(tvs);
  }

  @Get('details/:id')
  @ApiOperation({ summary: "[Get TV's details]" })
  async getTVsDetails(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.tvsService.getTVById(id);
  }
}
