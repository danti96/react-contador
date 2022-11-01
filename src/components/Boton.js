import React from "react";
import "../stylesheets/Boton.css";

function Boton({ texto, esBotonClick, callback }) {
  return (
    <button
      className={esBotonClick ? "boton-clic" : "boton-restart"}
      onClick={callback}
    >
      {texto}
    </button>
  );
}

export default Boton;
