// USE CASE

import { CategoriesListUseCase, MoviesListUseCase } from '@domain/useCase'

// ADAPTER

import { CategorieMoviesAdapter, MoviesListAdapter } from '@infra/adapters'

const CategorieUseCase = new CategoriesListUseCase( new  CategorieMoviesAdapter())
const MoviesUseCase = new MoviesListUseCase( new  MoviesListAdapter())


export {CategorieUseCase, MoviesUseCase}