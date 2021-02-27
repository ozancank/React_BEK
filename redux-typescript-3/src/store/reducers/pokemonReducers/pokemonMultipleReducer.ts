import * as actionTypes from '../../actionTypes/_actionTypes';

interface DefaultStateI {
    loading: boolean,
    data: any,
    errorMsg: string,
};

const defaultState: DefaultStateI = {
    loading: false,
    data: {},
    errorMsg: "",
};

const PokemonMultipleReducer = (state: DefaultStateI = defaultState, action: any) => {
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
                data: {
                    ...state.data,
                    [action.pokemonName]: action.payload
                },
            };
        default:
            return state;
    }
}

export default PokemonMultipleReducer;