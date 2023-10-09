import { useEffect, useState } from 'react'
import { useScrollAtEnd } from '@infra/hooks/useScrollAtEnd'
import useMovieStore from '@infra/store/useStoreMovie'

import { MoviesUseCase } from '@infra/connection'

export function usePopularMovies () {
  const { isEndSroll } = useScrollAtEnd()
  const { movies, setMovies } = useMovieStore()
  const [countPage, setCountPage] = useState(2)

  useEffect(() => {
    if (isEndSroll) {
      setCountPage(prevCountPage => prevCountPage + 1)

      const fetchData = async () => {
        try {
          const listQuery = await MoviesUseCase.getPopular(countPage)
          setMovies(movies.concat(listQuery))
        } catch (error) {
          // Handle errors
        }
      }

      fetchData()
    }
  }, [isEndSroll])

  return { movies, countPage }
}
