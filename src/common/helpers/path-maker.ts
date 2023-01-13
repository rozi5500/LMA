import { MoviesTvsInterface } from '../interfaces/movies&tvs-interface';
import { TV } from '../../modules/tvs/entity/tvs.entity';

export function pathMaker(entities: MoviesTvsInterface[]): any {
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

export function pathMakerForOneEntity(entity: TV): TV {
  const posterPathDomen = 'https://image.tmdb.org/t/p/w500';
  const backDropPath = 'https://image.tmdb.org/t/p/original';

  return {
    ...entity,
    poster_path: `${posterPathDomen}${entity.poster_path}`,
    backdrop_path: `${backDropPath}${entity.backdrop_path}`,
  };
}
