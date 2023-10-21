import { useMemo, useState } from 'react'

import { UpcomingsUseCase } from '@infra/connection'

export function useUpcomingMovies () {
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useMemo(() => {
    UpcomingsUseCase.getUpcoming()
      .then(listUpcoming => setUpcomingMovies(listUpcoming))
  }, [])

  return { upcomingMovies }
}
