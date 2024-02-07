import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'

import IconSearch from '@aplication/components/content/IconSearch'
import useIsScrollTop from '@infra/hooks/useIsScrollTop'
import { useMovies } from '@infra/hooks/useMovies'

function Header () {
  const fixedElement = 'scroll-top--header'
  const { scrollTop: isFixed } = useIsScrollTop({
    elementById: fixedElement,
    positonIdentity: 300
  })
  const [query, setQuery] = useState('')

  useMovies({ search: query })

  const debounceGetMovies = useCallback(
    debounce(query => {
      setQuery(query)
    }, 800),
    [setQuery]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    const dataForm = new FormData(event.target)
    const { search } = Object.fromEntries(dataForm)
    setQuery(search)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    debounceGetMovies(newSearch)
  }

  return (
    <header
      className={`${
        isFixed ? 'fixed z-50 top-0 left-0 right-0 px-4 lg:px-0 ' : 'block'
      } w-full overflow-hidden mt-3 group`}
      id='scroll-top--header'
    >
      <form
        className={`
          ${isFixed ? ' bg-neutral-800/80 text-white/80 ' : ' bg-black-light '}
          z-50 w-full lg:w-[450px] flex flex-row gap-4
          justify-between items-center border-custom 
          rounded-custom backdrop-blur-lg p-1 m-auto group-hover:[filter:drop-shadow(-1em_0_2em_var(--blue-active))]
          overflow-hidden`}
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <span className='ml-2'>
          <IconSearch />
        </span>
        <input
          name='search'
          type='text'
          placeholder='Avengers, Acción, Saw, Star Wars ...'
          className='w-full bg-transparent border-none outline-offset-0 h-8 focus:outline-none font-custom'
          autoFocus
          autoComplete='off'
          aria-label='Input entry movie'
        />

        <button
          type='submit'
          aria-level='submit form action'
          role='button'
          aria-label='Search movie'
          className='border-custom-secondary bg-[var(--black-10)]
            border-solid border-[1px] rounded-custom px-4 py-2
          text-white backdrop-blur-lg transition-all
          focus-visible:text-white/80 focus-visible:border-[var(--black-active)] focus-visible:outline-none
          hover:text-white/80 hover:border-[var(--black-active)]
            active:scale-95 font-custom'
        >
          Buscar
        </button>
      </form>
    </header>
  )
}

export default Header
