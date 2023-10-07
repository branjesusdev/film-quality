import { PATHS } from '@/app/config/paths'
import { usePopularMovies } from '@infra/hooks/usePopularMovies'
import { MoviePoster } from '@aplication/components/MoviePoster'

function PopularMovies () {
  const { popularMovies } = usePopularMovies()

  return (
    <section className='wrapper-content col-span-6 grid'>
      <ul className='grid grid-cols-3 gap-4'>
        {
          popularMovies &&
          popularMovies.map(({ posterPath, id, title, description, vote }) => {
            const img = `${PATHS.PREFIX_URL_PREVIEW_IMG}${posterPath}`
            return (
              <MoviePoster key={id} img={img} title={title} description={description} vote={vote} />
            )
          })
        }
      </ul>
    </section>
  )
}
export default PopularMovies
