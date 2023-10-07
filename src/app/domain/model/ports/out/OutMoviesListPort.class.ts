import { PopularList } from '@domain/model/entity'

export abstract class OutMoviesListPort {
  abstract getPopular() : Promise<PopularList>
}