import { PopularList } from '@domain/model/entity';
import { InMoviesListPort } from '../model/ports/in';
import { OutMoviesListPort } from '../model/ports/out/OutMoviesListPort.class';

export class MoviesListUseCase extends InMoviesListPort{

  constructor( private readonly outMoviesListPort : OutMoviesListPort ) {
    super();
  }

  getPopular(): Promise<PopularList> {
    return this.outMoviesListPort.getPopular()
  }
  
}