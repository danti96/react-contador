import logo from "./images/freecodecamp-logo.png";
import "./App.css";
import Boton from "./components/Boton";
import Contador from "./components/Contador";

import { useState } from "react";
function App() {
  const [nusmClicks, setNumClicks] = useState(0);

  const manejarClick = () => setNumClicks(nusmClicks + 1);

  const reiniciarContador = () => setNumClicks(0);

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={logo} alt="logo" />
      </div>
      <div className="contenedor-principal">
        <Contador numClick={nusmClicks} />
        <Boton texto="Click" esBotonClick={true} callback={manejarClick} />
        <Boton
          texto="Restart"
          esBotonClick={false}
          callback={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
