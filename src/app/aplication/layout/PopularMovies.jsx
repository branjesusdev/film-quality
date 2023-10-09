import { PATHS } from '@/app/config/paths'
import { MoviePoster } from '@aplication/components/MoviePoster'
import useMovieStore from '@infra/store/useStoreMovie'
import { usePopularMovies } from '@infra/hooks/usePopularMovies'

function PopularMovies () {
  const { movies } = useMovieStore()
  usePopularMovies()

  return (
    <section className='wrapper-content col-span-6 grid'>
      <ul className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          movies
            ? movies.map(({ posterPath, id, title, description, vote }) => {
              const img = `${PATHS.PREFIX_URL_PREVIEW_IMG}${posterPath}`
              return (
                <MoviePoster key={id} img={img} title={title} description={description} vote={vote} />
              )
            })
            : <p className='text-center text-sm'>Buscando...</p>
        }
      </ul>
    </section>
  )
}
export default PopularMovies
