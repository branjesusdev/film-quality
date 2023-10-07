import IconSearch from '@aplication/components/content/IconSearch'

function Header () {
  return (
    <header className='w-full overflow-hidden mt-3 group'>
      <form className='z-50 w-full lg:w-[450px] flex flex-row gap-4
        justify-between items-center border-custom bg-black-light
        rounded-custom backdrop-blur-lg p-1 m-auto group-hover:[filter:drop-shadow(-1em_0_2em_var(--blue-active))]
        overflow-hidden'
      >
        <span className='ml-2'>
          <IconSearch />
        </span>
        <input
          type='text'
          placeholder='Avengers, Acción, Saw, Star Wars ...'
          className='w-full bg-transparent border-none outline-offset-0 h-8 focus:outline-none font-custom'
          autoFocus
          aria-label='Input entry movie'
        />

        <button
          type='button'
          aria-level='submit form action'
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
