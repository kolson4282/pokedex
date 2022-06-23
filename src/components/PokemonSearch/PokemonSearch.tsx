import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePokemonList } from "../../hooks/usePokemonList";
import Select from "../Select/Select";

const PokemonSearch = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("1");
  const pokemon = usePokemonList();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Select
        label="Search"
        onChange={(e) => setId(e.target.value)}
        options={pokemon.map((pkmn) => ({ value: pkmn.id, label: pkmn.name }))}
      />
      <button onClick={() => navigate(`/pokemon/${id}`)}>Go</button>
    </div>
  );
};

export default PokemonSearch;
