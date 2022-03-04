import "./App.css";
import Navegador from "./components/navegador/Navegador";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Sobre from "./pages/Sobre/Sobre.js";
import Cadastro from "./pages/Cadastro/Cadastro";

function App() {
  return (
    <div className="container">
      <div>
        <Navegador></Navegador>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
