import { jugos } from "../data/jugos";
import { TarjetaJugo } from "./TarjetaJugo";

export function Carta() {
  return (
    <div className="container mt-4">
      <h2>Carta</h2>
      <div className="row">
        {jugos.map((jugo) => (
          <TarjetaJugo
            key={jugo.id}
            nombre={jugo.nombre}
            precio={jugo.precio}
            tamano={jugo.tamano}
          />
        ))}
      </div>
    </div>
  );
}