import axios from "axios";
import { Dispatch } from "react";
import {
    PokemonListDispatchTypes,
    POKEMON_LIST_FAIL, 
    POKEMON_LIST_LOADING, 
    POKEMON_LIST_SUCCESS, 
    POKEMON_MULTIPLE_FAIL, 
    POKEMON_MULTIPLE_LOADING,
    POKEMON_MULTIPLE_SUCCESS
} from "./pokemonActionsTypes";

export const GetPokemonList = (page: number) => async (dispatch: Dispatch<PokemonListDispatchTypes>) => {
    try {
        dispatch({
            type: POKEMON_LIST_LOADING
        });

        const perPage: number = 15;
        const offset: number = (page * perPage) - perPage;

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`);

        dispatch({
            type: POKEMON_LIST_SUCCESS,
            payload: res.data
        });
    }
    catch (e) {
        dispatch({
            type: POKEMON_LIST_FAIL
        })
    }
};

export const GetPokemon = (pokemon: string) => async (dispatch: any) => {
    try {
        dispatch({
            type: POKEMON_MULTIPLE_LOADING
        });

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        dispatch({
            type: POKEMON_MULTIPLE_SUCCESS,
            payload: res.data,
            pokemonName: pokemon
        });
    }
    catch (e) {
        dispatch({
            type: POKEMON_MULTIPLE_FAIL
        })
    }
}
