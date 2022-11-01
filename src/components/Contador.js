import React from "react";
import "../stylesheets/Contador.css";
function Contador({ numClick }) {
  return (
    <div className="contador">
      <label>{numClick}</label>
    </div>
  );
}

export default Contador;
