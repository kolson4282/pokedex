import React from "react";

type Props = {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const PokemonSearch = ({ onChange = () => {} }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <label htmlFor="searchBar">Search</label>
      <select id="searchBar" onChange={(e) => onChange(e)}>
        <option value="1">Bulbasaur</option>
        <option value="2">Ivysaur</option>
        <option value="3">Venusaur</option>
        <option value="4">Charmander</option>
        <option value="5">Charmeleon</option>
        <option value="6">Charizard</option>
        <option value="7">Squirtle</option>
        <option value="8">Wartortle</option>
        <option value="9">Blastoise</option>
      </select>
    </div>
  );
};

export default PokemonSearch;
