import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import PokemonListReducer from "./reducers/pokemonReducers/pokemonListReducer";
import PokemonMultipleReducer from "./reducers/pokemonReducers/pokemonMultipleReducer";

const rootReducer = combineReducers({
    PokemonList: PokemonListReducer,
    Pokemon: PokemonMultipleReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof rootReducer>;

export default store;