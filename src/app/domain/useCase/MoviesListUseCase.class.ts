import { PopularList, UpcomingList } from '@domain/model/entity';
import { InMoviesListPort } from '@domain/model/ports/in';
import { OutMoviesListPort } from '@domain/model/ports/out';

export class MoviesListUseCase extends InMoviesListPort {

  constructor( private readonly outMoviesListPort : OutMoviesListPort ) {
    super();
  }

  getPopular( page : number ): Promise<PopularList[]> {
    return this.outMoviesListPort.withPopular( page )
  }

  getUpcoming() : Promise<UpcomingList[]> {
    return this.outMoviesListPort.withUpcoming()
  }

  searchMovie( query : string ) : Promise<UpcomingList[]> {
    return this.outMoviesListPort.withSearchMovie(query)
  }
  
}