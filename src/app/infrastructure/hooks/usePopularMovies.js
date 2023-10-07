import { useEffect, useState } from 'react'

import { MoviesUseCase } from '@infra/connection'

export function usePopularMovies () {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    MoviesUseCase.getPopular()
      .then(listPopular => setPopularMovies(listPopular))
  }, [])

  return { popularMovies }
}
