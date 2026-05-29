import Layout from "./paginas/Layout.jsx";
import Carrinho from "./paginas/Carrinho.jsx";
import Orcamento from "./paginas/Orcamento.jsx";
import Produtos from "./paginas/Produtos.jsx";
import Sobre from "./paginas/Sobre.jsx";
import Contato from "./paginas/Contato.jsx";
import Home from "./paginas/Home.jsx";
import AvaliaProduto from "./paginas/AvaliaProduto.jsx";
import ConfirmaOrcamento from "./paginas/ConfirmaOrcamento.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="avalia-produto/:productId" element={<AvaliaProduto />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="orcamento" element={<Orcamento />} />
        <Route path="carrinho" element={<Carrinho />} />
        <Route path="contato" element={<Contato />} />
        <Route path="ConfirmaOrcamento" element={<ConfirmaOrcamento />} />
      </Route>
    </Routes>
  );
}

export default App;
