// USE CASE

import { CategoriesListUseCase } from '@domain/useCase'

// ADAPTER

import { CategorieMoviesAdapter } from '@infra/adapters'

const CategorieUseCase = new CategoriesListUseCase( new  CategorieMoviesAdapter())


export {CategorieUseCase}