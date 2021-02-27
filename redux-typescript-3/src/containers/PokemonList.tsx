import React, { useEffect, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store/store";
import _ from "lodash";
import { GetPokemonList } from "../store/actions/pokemonActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { pokemonListItemResults } from "../models/pokemonListModels";

const PokemonList = (props: any) => {
  const perPage: number = 30;
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootStore) => state.PokemonList);
  const FetchData = (page: number = 1) => {
    dispatch(GetPokemonList(page, perPage));
  };

  useEffect(() => {
    FetchData(1);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const ShowData = () => {
    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className={"list-wrapper"}>
          {pokemonList.data.map((el: pokemonListItemResults) => {
            return (
              <div key={el.name} className={"pokemon-item"}>
                <p>{el.name}</p>
                <Link to={`/pokemon/${el.name}`}>View</Link>
              </div>
            );
          })}
        </div>
      );
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  return (
    <div>
      <div className={"search-wrapper"}>
        <p>Search: </p>
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
        <button
          onClick={() => props.history.push(`/pokemon/${search.toLowerCase()}`)}
        >
          Search
        </button>
      </div>
      {ShowData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / perPage)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          onPageChange={(data: any) => FetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )}
    </div>
  );
};

export default PokemonList;
