import { PopularList, UpcomingList, Movie } from '@domain/model/entity'

export abstract class InMoviesListPort {
  abstract getPopular( page : number ) : Promise<PopularList[]>
  abstract getUpcoming() : Promise<UpcomingList[]>
  abstract searchMovie( movie : string ) : Promise<Movie[]>
}