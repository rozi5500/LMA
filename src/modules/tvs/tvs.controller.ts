import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TvsService } from './tvs.service';
import { TvsRequestQueryDto } from './dto/request/tvs-request-query.dto';
import { TvsResponse } from './dto/response/tvs-response';
import { RequestQueryDetailsDto } from '../../common/dto/request/request-query-details.dto';
import { TvDetailsResponse } from './dto/response/tv-details-response';

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
  @ApiResponse({ type: TvDetailsResponse })
  async getTVsDetails(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: RequestQueryDetailsDto,
  ): Promise<TvDetailsResponse> {
    const tv = await this.tvsService.getTVById(id, query.append_to_response);

    return TvDetailsResponse.mapForm(tv);
  }
}
