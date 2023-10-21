import { useEffect, useState } from 'react'
import useMovieStore from '@infra/store/useStoreMovie'

import { MoviesUseCase, SearchMovieUseCase } from '@infra/connection'

export function useMovies ({ search }) {
  const { movies, setMovies } = useMovieStore()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getMovies = async (search) => {
      try {
        setLoading(true)
        let listQuery
        if (search) {
          listQuery = await SearchMovieUseCase.searchMovie(search)
        } else {
          listQuery = await MoviesUseCase.getPopular(1)
        }
        setMovies(listQuery)
      } finally {
        setLoading(false)
      }
    }

    getMovies(search)
  }, [search, setMovies])

  return { movies, loading }
}
