import { Controller, Get, Query } from '@nestjs/common';
import { CommonsService } from './commons.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { QueryParamDto } from '../../common/dto/request/query-param.dto';
import { MoviesAndTvsSearchResponse } from './dto/response/movies-and-tvs-search-response';

@ApiTags('commons')
@Controller('commons')
export class CommonsController {
  constructor(private commonService: CommonsService) {}

  @Get('search')
  @ApiOperation({ summary: '[Get movies and TVs by search]' })
  async getMoviesAndTVsBySearch(
    @Query() query: QueryParamDto,
  ): Promise<MoviesAndTvsSearchResponse> {
    const res = await this.commonService.getMultiSearch(query);
    return MoviesAndTvsSearchResponse.mapForm(res);
  }
}
