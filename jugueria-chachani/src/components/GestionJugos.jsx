import { useState, useEffect } from "react";
import { listarJugos, crearJugo, eliminarJugo } from "../services/jugosService";

export function GestionJugos() {
  const [jugosLista, setJugosLista] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [tamano, setTamano] = useState("Vaso");

  const cargarLista = async () => {
    try {
      setError("");
      const resp = await listarJugos();
      setJugosLista(resp.data);
    } catch (err) {
      setError("No se pudo conectar con la API de jugos.");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarLista();
  }, []);

  const manejarCrear = async (e) => {
    e.preventDefault();
    try {
      await crearJugo({
        nombre,
        precio: Number(precio),
        tamano,
      });
      setNombre("");
      setPrecio("");
      setTamano("Vaso");
      await cargarLista();
    } catch (err) {
      setError("Error al crear el jugo.");
    }
  };

  const eliminar = async (id) => {
    try {
      await eliminarJugo(id);
      await cargarLista();
    } catch (err) {
      setError("Error al eliminar el jugo.");
    }
  };

  if (cargando) {
    return (
      <div className="container mt-4">
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Administrar jugos</h2>

      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={manejarCrear} className="row g-2 mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            step="any"
            className="form-control"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={tamano}
            onChange={(e) => setTamano(e.target.value)}
          >
            <option value="Vaso">Vaso</option>
            <option value="Jarra">Jarra</option>
          </select>
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">
            Guardar
          </button>
        </div>
      </form>

      <ul className="list-group">
        {jugosLista.map((jugo) => (
          <li
            key={jugo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {jugo.nombre} - {jugo.tamano} - S/ {Number(jugo.precio).toFixed(2)}
            </span>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => eliminar(jugo.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}