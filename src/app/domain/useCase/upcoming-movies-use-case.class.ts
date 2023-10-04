import { UpcomingList } from '@domain/model/entity';

export abstract class UpcomingMoviesUseCase {
  abstract getUpcomings() : UpcomingList
}