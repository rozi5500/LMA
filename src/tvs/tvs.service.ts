import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TvsRequestQueryDto } from './dto/request/tvs-request-query.dto';

@Injectable()
export class TvsService {
  async getPopularTVs(query: TvsRequestQueryDto) {
    const popularTVs = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=${query.page}`,
    );
    const posterPathDomen = 'https://image.tmdb.org/t/p/w500';

    const results = popularTVs.data.results.map((tv) => {
      return {
        ...tv,
        poster_path: posterPathDomen + tv.poster_path,
      };
    });

    return {
      ...popularTVs.data,
      results,
    };
  }
}
