import { useEffect } from 'react'
import useMovieStore from '@infra/store/useStoreMovie'

import { MoviesUseCase, SearchMovieUseCase } from '@infra/connection'

export function useMovies ({ search }) {
  const { movies, setMovies } = useMovieStore()

  useEffect(() => {
    const fetchData = async () => {
      try {
        let listQuery
        if (search) {
          listQuery = await SearchMovieUseCase.searchMovie(search)
        } else {
          listQuery = await MoviesUseCase.getPopular()
        }
        setMovies(listQuery)
      } catch (error) {
        // Handle errors
      }
    }

    fetchData()
  }, [search, setMovies])

  return { movies }
}
