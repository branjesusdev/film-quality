import ResponseUpcomingMovies from '@/app/mocks/with-upcoming.json'
import { PATHS } from '@/app/config/paths'

function UpcomingMovies () {
  const upcomingMovies = ResponseUpcomingMovies.results

  return (
    <section className='col-span-2 grid'>
      <div className='wrapper-content h-fit'>
        <ul className='grid grid-cols-2  gap-4'>
          {
            upcomingMovies &&
            upcomingMovies.map(({ backdrop_path, id, title }) => {
              const img = `${PATHS.PREFIX_URL_PREVIEW_IMG}${backdrop_path}`
              return (
                <li key={id} className='rounded-xl overflow-hidden shadow-md hover:opacity-70 cursor-pointer'>
                  <img
                    className='w-full h-full object-cover object-center'
                    src={img}
                    loading='lazy'
                    decoding='async'
                    alt=''
                    width='500'
                    height='500'/>
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
