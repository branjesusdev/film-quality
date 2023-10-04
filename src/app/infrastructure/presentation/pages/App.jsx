import '@/themes/@globlas.scss'
import Header from '@/app/infrastructure/presentation/layout/Header'
import PopularMovies from '@/app/infrastructure/presentation/layout/PopularMovies'
import CategoriesMovies from '@/app/infrastructure/presentation/layout/CategoriesMovies'
import UpcomingMovies from '@/app/infrastructure/presentation/layout/UpcomingMovies'
import ListMovies from '@/app/infrastructure/presentation/layout/ListMovies'

function App () {
  return (
    <div className='relative z-10 min-h-screen font-custom px-14'>
      <div className='overflow-hidden'>
        <div className="contrast-50 absolute left-0 h-full w-[100%] max-w-none object-cover object-center bg-no-repeat cursor-none pointer-events-none bg-[url('/backgrounds/bg-4-000fae5e.png')]" />
      </div>
      <Header />

      <main className='max-w-7xl mx-auto mt-[5rem] flex flex-col gap-4 xl:gap-6'>
        <div>
          <CategoriesMovies />
        </div>
        <div className='grid grid-cols-2 gap-4 xl:gap-6'>
          <PopularMovies />
          <UpcomingMovies />
        </div>

        <ListMovies />

      </main>

    </div>
  )
}

export default App
