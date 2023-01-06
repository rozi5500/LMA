import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MoviesService {
  apiKey: string = process.env.API_KEY;

  async getPopularMovies(page: number): Promise<any> {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=${page}`,
    );

    const posterPathDomen = 'https://image.tmdb.org/t/p/original';

    const results = res.data.results.map((movie) => {
      return {
        ...movie,
        poster_path: `${posterPathDomen}${movie.poster_path}`,
      };
    });

    return {
      ...res.data,
      results,
    };
  }
}
