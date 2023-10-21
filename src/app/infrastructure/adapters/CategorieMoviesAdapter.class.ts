
import { OutCategorieMoviesPort } from '@domain/model/ports/out';
import { CategorieList } from '@domain/model/entity';
import { OutCategorieList } from '@infra/adapters/models';
import { PATHS } from '@/app/config/paths'

export class CategorieMoviesAdapter implements OutCategorieMoviesPort {

  private urlBase;
  private apiKey;
  private apiAuth;

  constructor() {
    this.urlBase = PATHS.BASE_URL
    this.apiKey = import.meta.env.VITE_MOVIE_API_KEY ?? ''
    this.apiAuth = import.meta.env.VITE_REST_API_AUTH ?? ''
  }

  private get getApiKey() : string{
    return `${this.apiAuth} ${this.apiKey}`
  }
  
  async getCategories() : Promise<CategorieList[]> {

    'use server'

    const params = new URLSearchParams({
      language: 'es'
    })
    const res = await fetch(`${this.urlBase}genre/movie/list?${params}`, {
      method: 'GET',
      headers : {
        Authorization : this.getApiKey
      }
    })
    const data = await res.json() as OutCategorieList
    const { genres } = data
    return genres.map( ({id, name}) => {
      return {
        id : String(id),
        name
      } as CategorieList

    })
  }

}