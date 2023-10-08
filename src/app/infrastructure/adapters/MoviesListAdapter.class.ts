import { PopularList, UpcomingList, Movie } from "@domain/model/entity";
import { OutPopularMovies, OutUpcomingList, OutSearchMovies } from '@infra/adapters/models'
import { OutMoviesListPort } from "@domain/model/ports/out";


export class MoviesListAdapter implements OutMoviesListPort {
  
  async getPopular(): Promise<PopularList[]> {
    
    const params = new URLSearchParams({
      language: 'es'
    })
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?${params}`, {
      method: 'GET',
      headers : {
        Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGNmNWY3YTQ1NDZmYjdhYzUxY2FhMGE0NzljMDJlOCIsInN1YiI6IjY1MTc0MTViZDQ2NTM3MDlkYzdiZTM2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QFhIu-nv7pj-_bunB4OiAoXtdP9KY95YDEtBfdV4_zw`
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
        releaseDate  : release_date
      } as OutPopularMovies
    } )

  }

  async whithUpcoming() : Promise<UpcomingList[]> {
    const params = new URLSearchParams({
      language: 'es'
    })
    const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?${params}`, {
      method: 'GET',
      headers : {
        Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGNmNWY3YTQ1NDZmYjdhYzUxY2FhMGE0NzljMDJlOCIsInN1YiI6IjY1MTc0MTViZDQ2NTM3MDlkYzdiZTM2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QFhIu-nv7pj-_bunB4OiAoXtdP9KY95YDEtBfdV4_zw`
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
        releaseDate  : release_date
      } as UpcomingList
    } )
  }

  async whithSearchMovie( query : string ) : Promise<Movie[]> {
    const params = new URLSearchParams({
      language: 'es',
      query
    })
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?${params}`, {
      method: 'GET',
      headers : {
        Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGNmNWY3YTQ1NDZmYjdhYzUxY2FhMGE0NzljMDJlOCIsInN1YiI6IjY1MTc0MTViZDQ2NTM3MDlkYzdiZTM2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QFhIu-nv7pj-_bunB4OiAoXtdP9KY95YDEtBfdV4_zw`
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
        releaseDate  : release_date
      } as Movie
    } )
  }
  
}