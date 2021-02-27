export const POKEMON_LIST_LOADING = "POKEMON_LIST_LOADING";
export const POKEMON_LIST_SUCCESS = "POKEMON_LIST_SUCCESS";
export const POKEMON_LIST_FAIL = "POKEMON_LIST_FAIL";

export const POKEMON_MULTIPLE_LOADING = "POKEMON_MULTIPLE_LOADING";
export const POKEMON_MULTIPLE_SUCCESS = "POKEMON_MULTIPLE_SUCCESS";
export const POKEMON_MULTIPLE_FAIL = "POKEMON_MULTIPLE_FAIL";

export interface PokemonListLoading { type: typeof POKEMON_LIST_LOADING, }

export interface PokemonListSuccess { type: typeof POKEMON_LIST_SUCCESS, payload: any }

export interface PokemonListFail { type: typeof POKEMON_LIST_FAIL, }

export interface PokemonMultipleLoading { type: typeof POKEMON_MULTIPLE_LOADING, }

export interface PokemonMultipleSuccess { type: typeof POKEMON_MULTIPLE_SUCCESS, payload: any }

export interface PokemonMultipleFail { type: typeof POKEMON_MULTIPLE_FAIL, }

export type PokemonListDispatchTypes =
    PokemonListLoading
    | PokemonListSuccess
    | PokemonListFail
    | PokemonMultipleLoading
    | PokemonMultipleSuccess
    | PokemonMultipleFail