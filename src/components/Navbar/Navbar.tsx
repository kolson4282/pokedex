import { Link } from "react-router-dom";
import styled from "styled-components";
import PokemonSearch from "../PokemonSearch/PokemonSearch";

const StyledNavbar = styled.nav`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  border-bottom: 1px solid black;
`;

const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  list-style: none;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>Pokedex</h1>
      <PokemonSearch />
      <Links>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Random</Link>
        </li>
      </Links>
    </StyledNavbar>
  );
};

export default Navbar;
