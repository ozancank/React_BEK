import { pokemonListItemResults } from '../../../models/pokemonListModels';
import { AppDispatchTypes } from "../../appDispatchTypes";
import * as actionTypes from '../../actionTypes/_actionTypes';

interface DefaultStateI {
    loading: boolean,
    data: pokemonListItemResults[],
    errorMsg: string,
    count: number
};

const defaultState: DefaultStateI = {
    loading: false,
    data: [],
    errorMsg: "",
    count: 0
};

const PokemonListReducer = (state: DefaultStateI = defaultState, action: AppDispatchTypes) => {
    switch (action.type) {
        case actionTypes.POKEMON_LIST_LOADING:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case actionTypes.POKEMON_LIST_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "unable to get pokemon"
            };
        case actionTypes.POKEMON_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                errorMsg: "",
                count: action.payload.count
            };
        default:
            return state;
    }
}

export default PokemonListReducer;