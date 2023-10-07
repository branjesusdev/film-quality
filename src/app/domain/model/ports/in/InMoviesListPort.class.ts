import { PopularList } from '@domain/model/entity'

export abstract class InMoviesListPort {
  abstract getPopular() : Promise<PopularList>
}