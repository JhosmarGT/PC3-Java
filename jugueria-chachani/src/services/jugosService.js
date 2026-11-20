import { api } from "./api";

export const listarJugos = () => api.get("/jugos");
export const crearJugo = (jugo) => api.post("/jugos", jugo);
export const eliminarJugo = (id) => api.delete(`/jugos/${id}`);