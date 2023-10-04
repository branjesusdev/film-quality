import { useEffect, useState } from 'react'

import { CategorieUseCase } from '@infra/presentation/connection'

function CategoriesMovies () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    CategorieUseCase.getCategories()
      .then((categoriesList) => setCategories(categoriesList))
      .catch((error) => {})
  }, [])

  return (
    <section className='wrapper-content'>

      <ul className='flex gap-3 flex-wrap justify-between items-center'>
        {
        categories &&
        categories.map(({ id, name }) => (
          <li key={id} className='px-4 py-1 border-custom rounded-custom bg-black-light cursor-pointer hover:scale-[105%] hover:shadow-lg'> {name} </li>
        ))
       }

      </ul>
    </section>
  )
}

export default CategoriesMovies
