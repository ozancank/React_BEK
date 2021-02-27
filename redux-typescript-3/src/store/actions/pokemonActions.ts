import axios from "axios";
import { Dispatch } from "react";
import { AppDispatchTypes } from "../appDispatchTypes";
import * as actionTypes from '../actionTypes/_actionTypes';

export const GetPokemonList = (page: number) => async (dispatch: Dispatch<AppDispatchTypes>) => {
    try {
        dispatch({
            type: actionTypes.POKEMON_LIST_LOADING
        });

        const perPage: number = 15;
        const offset: number = (page * perPage) - perPage;

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`);

        dispatch({
            type: actionTypes.POKEMON_LIST_SUCCESS,
            payload: res.data
        });
    }
    catch (e) {
        dispatch({
            type: actionTypes.POKEMON_LIST_FAIL
        })
    }
};

export const GetPokemon = (pokemon: string) => async (dispatch: any) => {
    try {
        dispatch({
            type: actionTypes.POKEMON_MULTIPLE_LOADING
        });

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        dispatch({
            type: actionTypes.POKEMON_MULTIPLE_SUCCESS,
            payload: res.data,
            pokemonName: pokemon
        });
    }
    catch (e) {
        dispatch({
            type: actionTypes.POKEMON_MULTIPLE_FAIL
        })
    }
}
