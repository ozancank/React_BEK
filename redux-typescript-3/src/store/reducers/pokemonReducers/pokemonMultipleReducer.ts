import { pokemonMultiple } from '../../../models/pokemonDetailModels';
import * as actionTypes from '../../actionTypes/_actionTypes';
import { AppDispatchTypes } from '../../appDispatchTypes';

interface DefaultStateI {
    loading: boolean,
    errorMsg: string,
    data?: pokemonMultiple,
};

const defaultState: DefaultStateI = {
    loading: false,
    errorMsg: "",
    data: {} as pokemonMultiple
};

const PokemonMultipleReducer = (state: DefaultStateI = defaultState, action: AppDispatchTypes) => {
    switch (action.type) {
        case actionTypes.POKEMON_MULTIPLE_LOADING:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case actionTypes.POKEMON_MULTIPLE_FAIL:
            return {
                ...state,
                loading: false,
                errorMsg: "unable to find pokemon"
            };
        case actionTypes.POKEMON_MULTIPLE_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMsg: "",
                data: action.payload
            };
        default:
            return state;
    }
}

export default PokemonMultipleReducer;