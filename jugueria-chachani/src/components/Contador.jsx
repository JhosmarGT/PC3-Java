import { useState, useEffect, useRef } from "react";

export function Contador() {
  const [vasos, setVasos] = useState(0);
  const [meta, setMeta] = useState(10);
  const inputMetaRef = useRef(null);

  useEffect(() => {
    document.title = `Vasos vendidos: ${vasos}`;
  }, [vasos]);

  const sumarTres = () => {
    setVasos((v) => v + 1);
    setVasos((v) => v + 1);
    setVasos((v) => v + 1);
  };

  const reiniciar = () => {
    setVasos(0);
  };

  const editarMeta = () => {
    inputMetaRef.current?.focus();
  };

  const metaAlcanzada = vasos >= Number(meta) && Number(meta) > 0;

  return (
    <div className="card p-3 mt-4">
      <h4>Control de vasos</h4>
      <p className="fs-5">Vasos vendidos: {vasos}</p>

      <div className="d-flex gap-2 mb-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setVasos((v) => v + 1)}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={sumarTres}
        >
          +3
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={reiniciar}
        >
          Reiniciar
        </button>
      </div>

      <div className="mb-2">
        <label className="form-label">Meta del día</label>
        <div className="d-flex gap-2">
          <input
            ref={inputMetaRef}
            type="number"
            className="form-control"
            value={meta}
            onChange={(e) => setMeta(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={editarMeta}
          >
            Editar meta
          </button>
        </div>
      </div>

      {metaAlcanzada && (
        <div className="alert alert-success mt-2 mb-0">¡Meta alcanzada!</div>
      )}
    </div>
  );
}