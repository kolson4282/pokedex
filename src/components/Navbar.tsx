import styled from "styled-components";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label htmlFor="searchBar">Search</label>
        <select id="searchBar">
          <option value="1">Bulbasaur</option>
          <option value="4">Charmander</option>
          <option value="7">Squirtle</option>
        </select>
      </div>
      <Links>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Random</a>
        </li>
      </Links>
    </StyledNavbar>
  );
};

export default Navbar;
