import React from "react";
import "./Navegador.css";
import { Link } from "react-router-dom";

const Navegador = () => {
  return (
    <nav className="navbar">
      <ul className="listLinks" >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastro</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navegador;
