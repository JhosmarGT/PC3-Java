export function TarjetaJugo({ nombre, precio, tamano }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">
            {nombre}{" "}
            {precio < 8 && <span className="badge bg-success">Promo</span>}
          </h5>
          <p className="card-text">Tamaño: {tamano}</p>
          <p className="card-text">Precio: S/ {Number(precio).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}