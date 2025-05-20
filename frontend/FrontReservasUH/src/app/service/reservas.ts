import { Salas } from "./salas";
import { Usuario } from "./usuario";

export class Reservas {

    id: number;
    sede: string;
    motivo: string;
    fecha: string;
    hora: string;
    estado: string;
    salas: Salas;
    usuario: Usuario;

    constructor(id: number, sede: string, motivo: string, fecha: string, hora: string, estado: string, salas: Salas, usuario: Usuario) {
        this.id = id;
        this.sede = sede;
        this.motivo = motivo;
        this.fecha = fecha;
        this.hora = hora;
        this.estado = estado;
        this.salas = salas;
        this.usuario = usuario;
    }
}
