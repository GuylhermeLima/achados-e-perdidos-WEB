import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import RecuperarSenha from "./pages/RecuperarSenha";
import Itens from "./pages/Itens";
import CadastrarItem from "./pages/CadastrarItem";
import DetalheItem from "./pages/DetalheItem";
import SolicitarItem from "./pages/SolicitarItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/itens" element={<Itens />} />
        <Route path="/cadastrar-item" element={<CadastrarItem />} />

        <Route
          path="/item/:id"
          element={<DetalheItem />}
        />

        <Route
          path="/solicitar-item/:id"
          element={<SolicitarItem />}
        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;