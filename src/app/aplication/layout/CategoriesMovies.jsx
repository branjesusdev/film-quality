import { useState } from 'react'
import { useCategories } from '@infra/hooks/useCategories'
import { useMovies } from '@infra/hooks/useMovies'

function CategoriesMovies () {
  const [categoryFilter, setCategoryFilter] = useState()
  const { categories: categoriesMap } = useCategories()

  useMovies({ search: categoryFilter })
  const handleSearchCategory = (value) => {
    setCategoryFilter(value)
  }

  return (
    <section className='wrapper-content'>

      <ul className='flex gap-3 flex-wrap justify-center items-center'>
        {
        categoriesMap &&
        categoriesMap.map(({ id, name }) => (
          <li
            key={id}
            onClick={() => handleSearchCategory(name)}
            className='text-sm px-3 py-1 border-custom rounded-custom bg-black-light hover:text-white/80
            hover:border-[var(--blue-active)]
            cursor-pointer hover:scale-[105%] hover:shadow-lg
            hover:[filter:drop-shadow(0_0_2em_var(--blue-active))]'
          > {name}
          </li>
        ))
       }

      </ul>
    </section>
  )
}

export default CategoriesMovies
