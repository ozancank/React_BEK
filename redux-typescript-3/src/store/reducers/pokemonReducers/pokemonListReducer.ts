import { pokemonListResults } from '../../../models/pokemonListModels';
import { AppDispatchTypes } from "../../appDispatchTypes";
import * as actionTypes from '../../actionTypes/_actionTypes';

interface DefaultStateI {
    loading: boolean,
    errorMsg: string,
    data: pokemonListResults[],
    count: number
};

const defaultState: DefaultStateI = {
    loading: false,
    errorMsg: "",
    data: [],
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
                errorMsg: "",
                data: action.payload.results,
                count: action.payload.count
            };
        default:
            return state;
    }
}

export default PokemonListReducer;