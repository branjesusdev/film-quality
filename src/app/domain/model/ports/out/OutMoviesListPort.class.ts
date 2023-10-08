import { PopularList, UpcomingList, Movie } from '@domain/model/entity'

export abstract class OutMoviesListPort {
  abstract getPopular() : Promise<PopularList[]>
  abstract whithUpcoming() : Promise<UpcomingList[]>
  abstract whithSearchMovie( movie : string ) : Promise<Movie[]>
}