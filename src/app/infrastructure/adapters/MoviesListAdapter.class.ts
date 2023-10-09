import { PopularList, UpcomingList, Movie } from "@domain/model/entity";
import { OutPopularMovies, OutUpcomingList, OutSearchMovies } from '@infra/adapters/models'
import { OutMoviesListPort } from "@domain/model/ports/out";
import { PATHS } from '@/app/config/paths'

export class MoviesListAdapter implements OutMoviesListPort {

  
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
  
  async withPopular( page : number ): Promise<PopularList[]> {
    
    const params = new URLSearchParams({
      language: 'es',
      page : String(page)
    })
    const res = await fetch(`${this.urlBase}movie/popular?${params}`, {
      method: 'GET',
      headers : {
        Authorization : this.getApiKey
      }
    })
    const data = await res.json() as OutPopularMovies
    const { results } = data

    return results.map( ( { id, title, overview, release_date, poster_path, vote_average } ) => {
      return {
        id,
        posterPath : poster_path,
        title,
        vote : vote_average,
        description : overview,
        releaseDate  : String(release_date)
      } as PopularList
    } )

  }

  async withUpcoming() : Promise<UpcomingList[]> {
    const params = new URLSearchParams({
      language: 'es'
    })
    const res = await fetch(`${this.urlBase}movie/upcoming?${params}`, {
      method: 'GET',
      headers : {
        Authorization : this.getApiKey
      }
    })
    const data = await res.json() as OutUpcomingList
    const { results } = data

    return results.map( ( { id, title, overview, release_date, poster_path, vote_average } ) => {
      return {
        id,
        posterPath : poster_path,
        title,
        vote : vote_average,
        description : overview,
        releaseDate  : String(release_date)
      } as UpcomingList
    } )
  }

  async withSearchMovie( query : string ) : Promise<Movie[]> {
    const params = new URLSearchParams({
      language: 'es',
      query
    })
    const res = await fetch(`${this.urlBase}search/movie?${params}`, {
      method: 'GET',
      headers : {
        Authorization : this.getApiKey
      }
    })
    const data = await res.json() as OutSearchMovies
    const { results } = data

    return results.map( ( { id, title, overview, release_date, poster_path, vote_average } ) => {
      return {
        id,
        posterPath : poster_path,
        title,
        vote : vote_average,
        description : overview,
        releaseDate  : String(release_date)
      } as Movie
    } )
  }
  
}