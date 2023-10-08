import { CategorieList } from '@domain/model/entity'
import { OutCategorieMoviesPort } from '@domain/model/ports/out';
import { InCategorieMoviesPort } from '@domain/model/ports/in';

export class CategoriesListUseCase extends InCategorieMoviesPort {

  constructor(private readonly outPort : OutCategorieMoviesPort) {
    super()
  }

  getCategories() : Promise<CategorieList[]> {
    return this.outPort.getCategories()
  }
  
}