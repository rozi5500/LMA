import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TvsRequestQueryDto } from './dto/request/tvs-request-query.dto';
import * as process from 'process';
import { CountryEnum } from '../../enums/country-enums';

@Injectable()
export class TvsService {
  private apiKey: string = process.env.API_KEY;

  async getPopularTVs(query: TvsRequestQueryDto) {
    const popularTVs = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&page=${query.page}`,
    );
    const posterPathDomen = 'https://image.tmdb.org/t/p/w500';

    popularTVs.data.results = popularTVs.data.results.filter((elem) => {
      for (const country of elem.origin_country) {
        return country !== CountryEnum.IN && country !== CountryEnum.PK;
      }
    });

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

  async getTVById(tv_id: number): Promise<object> {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${this.apiKey}&language=en-US`,
    );

    return response.data;
  }
}
