import { useParams } from "react-router-dom";

type Props = {};

const PokemonPage = (props: Props) => {
  const { id } = useParams();
  return <div>PokemonPage {id}</div>;
};

export default PokemonPage;
