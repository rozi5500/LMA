import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { MoviesQueryDto } from './dto/request/movies-query.dto';
import { pathMaker } from '../common/helpers/path-maker';

@Injectable()
export class MoviesService {
  apiKey: string = process.env.API_KEY;

  async getPopularMovies(page: number): Promise<any> {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=${page}`,
    );

    const results = pathMaker(res.data.results);

    return {
      ...res.data,
      results,
    };
  }

  async getMoviesBySearch(query: MoviesQueryDto) {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&page=${query.page}&include_adult=true&query=${query.query}`,
    );

    const results = pathMaker(res.data.results);

    return { ...res.data, results };
  }
}
