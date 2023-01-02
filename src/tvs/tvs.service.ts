import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TvsRequestQueryDto } from './dto/request/tvs-request-query.dto';

@Injectable()
export class TvsService {
  // comments
  async getPopularTVs(query: TvsRequestQueryDto) {
    console.log(process.env.PORT);
    console.log(process.env.API_KEY);
    const popularTVs = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=${query.page}`,
    );
    return popularTVs.data;
  }
}
