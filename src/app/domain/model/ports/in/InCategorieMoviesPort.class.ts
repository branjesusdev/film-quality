import { CategorieList } from '@domain/model/entity';

export abstract class InCategorieMoviesPort {
  abstract getCategories() : Promise<CategorieList>
}