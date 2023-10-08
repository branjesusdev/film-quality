import { CategorieList } from '@domain/model/entity';

export abstract class OutCategorieMoviesPort {
  abstract getCategories() : Promise<CategorieList[]>
}