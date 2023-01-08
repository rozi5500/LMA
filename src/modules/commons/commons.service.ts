import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { pathMaker } from '../../common/helpers/path-maker';
import { QueryParamDto } from '../../common/dto/request/query-param.dto';

@Injectable()
export class CommonsService {
  apiKey: string = process.env.API_KEY;

  async getMultiSearch(query: QueryParamDto) {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&page=${query.page}&include_adult=true&query=${query.query}`,
    );

    const results = pathMaker(res.data.results);

    return { ...res.data, results };
  }
}
