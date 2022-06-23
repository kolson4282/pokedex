import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(1);
  return (
    <>
      <Navbar onChange={(e) => setSelectedPokemon(e.target.value)} />
      <Home pokemon={selectedPokemon} />
    </>
  );
}

export default App;
