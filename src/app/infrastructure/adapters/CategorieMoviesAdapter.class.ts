import { OutCategorieMoviesPort } from '@domain/model/ports/out';
import { CategorieList } from '@domain/model/entity';
import { type OutCategorieList } from '@infra/adapters/models';

export class CategorieMoviesAdapter implements OutCategorieMoviesPort {
  
  async getCategories() : Promise<CategorieList> {
    const params = new URLSearchParams({
      language: 'es'
    })
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?${params}`, {
      method: 'GET',
      headers : {
        Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGNmNWY3YTQ1NDZmYjdhYzUxY2FhMGE0NzljMDJlOCIsInN1YiI6IjY1MTc0MTViZDQ2NTM3MDlkYzdiZTM2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QFhIu-nv7pj-_bunB4OiAoXtdP9KY95YDEtBfdV4_zw`
      }
    })
    const data = await res.json() as OutCategorieList
    const { genres } = data
    return genres
  }

}