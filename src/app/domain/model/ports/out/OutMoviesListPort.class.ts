import { PopularList, UpcomingList, Movie } from '@domain/model/entity'

export abstract class OutMoviesListPort {
  abstract withPopular( page : number ) : Promise<PopularList[]>
  abstract withUpcoming() : Promise<UpcomingList[]>
  abstract withSearchMovie( movie : string ) : Promise<Movie[]>
}