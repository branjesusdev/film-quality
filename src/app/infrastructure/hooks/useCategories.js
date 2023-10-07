import { useEffect, useState } from 'react'

import { CategorieUseCase } from '@infra/connection'

export function useCategories () {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    CategorieUseCase.getCategories()
      .then((categoriesList) => setCategories(categoriesList))
  }, [])

  return { categories }
}
