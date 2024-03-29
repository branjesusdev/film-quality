import '@/themes/@globlas.scss'
import Header from '@aplication/layout/Header'
import PopularMovies from '@aplication/layout/PopularMovies'
import CategoriesMovies from '@aplication/layout/CategoriesMovies'
import UpcomingMovies from '@aplication/layout/UpcomingMovies'
import ArrowTop from '@aplication/layout/ArrowTop'

function App () {
  return (
    <div className='relative z-10 min-h-screen font-custom px-4 lg:px-14' id='wrap-content'>
      <div className='overflow-hidden'>
        <div className="contrast-50 fixed left-0 h-full w-[100%] max-w-none object-cover object-center bg-no-repeat cursor-none pointer-events-none 
        bg-[url('/backgrounds/bg-4-000fae5e.avif')] aspect-[1/1] -z-10" ></div>
      </div>
      <Header />

      <main className='max-w-7xl mx-auto mt-[5rem] flex flex-col gap-4 xl:gap-6'>
        <div>
          <CategoriesMovies />
        </div>
        <div className='md:grid md:grid-cols-8  gap-4 xl:gap-6 mb-10'>
          <PopularMovies />
          <UpcomingMovies />
        </div>

        <ArrowTop />

      </main>

    </div>
  )
}

export default App
