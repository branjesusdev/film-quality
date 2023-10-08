import { useUpcomingMovies } from '@infra/hooks/useUpcomingMovies'
import { PATHS } from '@/app/config/paths'

function UpcomingMovies () {
  const { upcomingMovies } = useUpcomingMovies()

  return (
    <section className='col-span-2 grid'>
      <div className='wrapper-content h-fit'>

        <h1 className='text-cyan-400 text-base'>Proximamente</h1>

        <ul className='grid grid-cols-2  gap-4 mt-3'>
          {
            upcomingMovies &&
            upcomingMovies.map(({ posterPath, id, title, description, vote }) => {
              const img = `${PATHS.PREFIX_URL_PREVIEW_IMG}${posterPath}`
              return (
                <li key={id} className='rounded-xl overflow-hidden shadow-md hover:opacity-70 cursor-pointer'>
                  <img
                    className='w-full h-full object-cover object-center'
                    src={img}
                    loading='lazy'
                    decoding='async'
                    alt=''
                    width='500'
                    height='500'
                  />
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default UpcomingMovies
