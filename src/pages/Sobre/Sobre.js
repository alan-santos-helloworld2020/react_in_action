import React from "react";
import "./Sobre.css";

const Sobre = () => {
  return (
    <div className="containerSobre">
      <div className="card">
        <header className="headerCard">
          <span>Sobre</span>
        </header>
        <article className="bodyCard">
          <p>* ReactJS</p>
          <p>* Gerenciamento de estado</p>
          <p>* Validação de campos com yup</p>
          <p>* Material-Icons</p>
          <p>* Sweetalert2</p>
          <p>* html5/css3</p>
        </article>
      </div>
    </div>
  );
};

export default Sobre;
