import { PopularList, UpcomingList } from '@domain/model/entity';
import { InMoviesListPort } from '@domain/model/ports/in';
import { OutMoviesListPort } from '@domain/model/ports/out';

export class MoviesListUseCase extends InMoviesListPort {

  constructor( private readonly outMoviesListPort : OutMoviesListPort ) {
    super();
  }

  getPopular(): Promise<PopularList[]> {
    return this.outMoviesListPort.getPopular()
  }

  getUpcoming() : Promise<UpcomingList[]> {
    return this.outMoviesListPort.whithUpcoming()
  }

  searchMovie( query : string ) : Promise<UpcomingList[]> {
    return this.outMoviesListPort.whithSearchMovie(query)
  }
  
}