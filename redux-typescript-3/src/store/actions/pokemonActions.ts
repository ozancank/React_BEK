import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { AppDispatchTypes } from "../appDispatchTypes";
import * as actionTypes from '../actionTypes/_actionTypes';
import { pokemonList } from "../../models/pokemonListModels";
import { pokemonMultiple } from "../../models/pokemonDetailModels";

export const GetPokemonList = (page: number, perPage: number) => async (dispatch: Dispatch<AppDispatchTypes>) => {
    try {
        dispatch({
            type: actionTypes.POKEMON_LIST_LOADING
        });

        const offset: number = (page * perPage) - perPage;

        const res: AxiosResponse<pokemonList> = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`);

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

export const GetPokemon = (pokemonName: string) => async (dispatch: Dispatch<AppDispatchTypes>) => {
    try {
        dispatch({
            type: actionTypes.POKEMON_MULTIPLE_LOADING
        });

        const res: AxiosResponse<pokemonMultiple>  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        dispatch({
            type: actionTypes.POKEMON_MULTIPLE_SUCCESS,
            payload: res.data,
        });
    }
    catch (e) {
        dispatch({
            type: actionTypes.POKEMON_MULTIPLE_FAIL
        })
    }
}
