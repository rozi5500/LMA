import { MoviesTvsInterface } from '../interfaces/movies&tvs-interface';

export function pathMaker(entities: MoviesTvsInterface[]) {
  const posterPathDomen = 'https://image.tmdb.org/t/p/w500';
  const backDropPath = 'https://image.tmdb.org/t/p/original';

  return entities.map((entity) => {
    return {
      ...entity,
      poster_path: `${posterPathDomen}${entity.poster_path}`,
      backdrop_path: `${backDropPath}${entity.backdrop_path}`,
    };
  });
}
