import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TvsRequestQueryDto } from './dto/request/tvs-request-query.dto';
import { CountryEnum } from '../../common/enums/country-enums';
import { pathMaker } from '../../common/helpers/path-maker';

@Injectable()
export class TvsService {
  private apiKey: string = process.env.API_KEY;

  async getPopularTVs(query: TvsRequestQueryDto) {
    const popularTVs = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&page=${query.page}`,
    );

    const excludedCountries = [CountryEnum.IN, CountryEnum.PK, CountryEnum.CN];

    popularTVs.data.results = popularTVs.data.results.filter((elem) => {
      return elem.origin_country.every((country) => {
        return !excludedCountries.includes(country);
      });
    });

    const results = pathMaker(popularTVs.data.results);

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
