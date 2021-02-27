import * as actionTypes from './_actionTypes'

export interface PokemonListLoading { type: typeof actionTypes.POKEMON_LIST_LOADING, }

export interface PokemonListSuccess { type: typeof actionTypes.POKEMON_LIST_SUCCESS, payload: any }

export interface PokemonListFail { type: typeof actionTypes.POKEMON_LIST_FAIL, }

export interface PokemonMultipleLoading { type: typeof actionTypes.POKEMON_MULTIPLE_LOADING, }

export interface PokemonMultipleSuccess { type: typeof actionTypes.POKEMON_MULTIPLE_SUCCESS, payload: any }

export interface PokemonMultipleFail { type: typeof actionTypes.POKEMON_MULTIPLE_FAIL, }

export type PokemonDispatchTypes =
    | PokemonListLoading
    | PokemonListSuccess
    | PokemonListFail
    | PokemonMultipleLoading
    | PokemonMultipleSuccess
    | PokemonMultipleFail