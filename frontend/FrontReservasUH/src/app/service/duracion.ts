import { Reservas } from "./reservas";
import { Salas } from "./salas";

export class Duracion {

    id: number;
    reservas: Reservas;
    salas: Salas;
    inicioServicio: string;
    tiempoSala: number;
    finServicio: string;
    estado: string;

    constructor(id: number, reservas: Reservas, salas: Salas, inicioServicio: string, tiempoSala: number,finServicio: string, estado: string) {
        this.id = id;
        this.reservas = reservas;
        this.salas = salas;
        this.inicioServicio = inicioServicio;
        this.tiempoSala = tiempoSala;
        this.finServicio = finServicio;
        this.estado = estado;
    }   
}
