import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TvsRequestQueryDto } from './dto/request/tvs-request-query.dto';
import { CountryEnum } from '../../common/enums/country-enums';
import {
  pathMaker,
  pathMakerForOneEntity,
} from '../../common/helpers/path-maker';

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

  async getTVById(tv_id: number, appendToResponse: string): Promise<any> {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${this.apiKey}&append_to_response=${appendToResponse}`,
    );
    const tv = pathMakerForOneEntity(response.data);
    const MIN_VOTE_AVERAGE = 5;
    const trailerType = 'Trailer';

    const trailerTypeVideos = tv?.videos?.results.filter(
      (video) => video.type === trailerType,
    );

    const filteredImagesByVoteAverage = tv?.images?.backdrops.filter(
      (image) => image.vote_average > MIN_VOTE_AVERAGE,
    );

    return {
      ...tv,
      videos: { results: trailerTypeVideos },
      images: { backdrops: filteredImagesByVoteAverage },
    };
  }
}
