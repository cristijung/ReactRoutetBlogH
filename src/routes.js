import Rodape from "components/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
//import PaginaPadrao from "./components/PaginaPadrao";


function AppRoutes() {
  return (
    <>    
    <BrowserRouter>
        <Menu />
      <Routes>      
        <Route path="/" element={<Inicio />} />
        <Route path="/SobreMim" element={<SobreMim />} />
        <Route path="*" element={<div>Erro 404 - Página não encontrada.</div>} />
      </Routes>
      <Rodape /> 
    </BrowserRouter>
    </>
  );
}

export default AppRoutes;
