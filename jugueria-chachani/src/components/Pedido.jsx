import { useState } from "react";
import { jugos } from "../data/jugos";

export function Pedido() {
  const [cliente, setCliente] = useState("");
  const [jugoNombre, setJugoNombre] = useState(jugos[0].nombre);
  const [cantidad, setCantidad] = useState(1);
  const [resumen, setResumen] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    const jugoEncontrado = jugos.find((j) => j.nombre === jugoNombre);
    const precioUnitario = jugoEncontrado ? jugoEncontrado.precio : 0;
    const total = (precioUnitario * Number(cantidad)).toFixed(2);

    setResumen(
      `Pedido de ${cliente}: ${cantidad} x ${jugoNombre} = S/ ${total}`
    );
  };

  return (
    <div className="container mt-4">
      <h2>Pedido</h2>
      <form onSubmit={manejarSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Cliente</label>
          <input
            type="text"
            className="form-control"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Jugo</label>
          <select
            className="form-select"
            value={jugoNombre}
            onChange={(e) => setJugoNombre(e.target.value)}
          >
            {jugos.map((jugo) => (
              <option key={jugo.id} value={jugo.nombre}>
                {jugo.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Cantidad</label>
          <input
            type="number"
            min="1"
            className="form-control"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Registrar pedido
        </button>
      </form>

      {resumen && <p className="mt-3 fw-bold">{resumen}</p>}
    </div>
  );
}