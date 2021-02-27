import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/pokemonActions";
import { RootStore } from "../store";
import _ from "lodash";

const Pokemon = (props: any) => {
  const pokemonName: string = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state: RootStore) => state.Pokemon);

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return (
        <div className={"pokemon-wrapper"}>
          <div className={"item"}>
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt="" />
            <img src={pokeData.sprites.back_default} alt="" />
            <img src={pokeData.sprites.front_shiny} alt="" />
            <img src={pokeData.sprites.back_shiny} alt="" />
          </div>
          <div className="item">
            <h1>Stats</h1>
            {pokeData.stats.map((el: any) => {
              return (
                <p>
                  {el.stat.name} {el.base_stat}
                </p>
              );
            })}
          </div>
          <div className="item">
            <h1>Abilities</h1>
            {pokeData.abilities.map((el: any) => {
              return <p>{el.ability.name}</p>;
            })}
          </div>
        </div>
      );
    }

    if (pokemonState.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>error getting data</p>;
  };

  return (
    <div className={"poke"}>
      <h1>{pokemonName}</h1>
      {ShowData()}
    </div>
  );
};

export default Pokemon;
