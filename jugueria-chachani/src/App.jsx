import { Routes, Route, Link } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { Carta } from "./components/Carta";
import { Pedido } from "./components/Pedido";
import { GestionJugos } from "./components/GestionJugos";

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand bg-light px-3 border-bottom">
        <div className="navbar-nav gap-3">
          <Link className="nav-link" to="/">Inicio</Link>
          <Link className="nav-link" to="/carta">Carta</Link>
          <Link className="nav-link" to="/pedido">Pedido</Link>
          <Link className="nav-link" to="/admin">Administrar</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/admin" element={<GestionJugos />} />
        <Route path="*" element={<div className="container mt-4">Página no encontrada</div>} />
      </Routes>
    </div>
  );
}