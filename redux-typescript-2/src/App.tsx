import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "./actions/PokemonActions";
import "./App.css";
import { RootStore } from "./Store";

//https://www.youtube.com/watch?v=Lkng78QNWJA&ab_channel=LetsCode

function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);
  const handleSubmit = () => {
    dispatch(GetPokemon(pokemonName));
  };
  console.log("pokemon state:", pokemonState);

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {pokemonState.pokemon && (
          <div>
            <img src={pokemonState.pokemon.sprites.front_default} alt="" />
            {pokemonState.pokemon.abilities.map((ability) => {
              return <p>{ability.ability.name}</p>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
