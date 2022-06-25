import { useQuery } from "react-query";

export const usePokemonList = () => {
  const { data, isLoading, isError } = useQuery("pokemonList", () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon-species?limit=10000`)
      .then((res) => res.json())
      .then((data) =>
        data.results.map((pkmn: { name: string }, i: number) => {
          return { id: i + 1, name: pkmn.name };
        })
      );
  });

  return { data, isLoading, isError };
};
