export class Usuario {
    
    public id: number | null
    primernombre: string;
    segundonombre: string;
    primerapellido: string;
    segundoapellido: string;
    correo: string;
    contrasena: string;
    codigo_estudiantil: number;
    tipo_documento: string;
    num_documento: number;
    rol: string;

    constructor(id: null, primernombre: string, segundonombre: string, primerapellido: string, segundoapellido: string, correo: string, contrasena: string, codigo_estudiantil: number, tipo_documento: string, num_documento: number, rol: string) {
        this.id = id;
        this.primernombre = primernombre;
        this.segundonombre = segundonombre;
        this.primerapellido = primerapellido;
        this.segundoapellido = segundoapellido;
        this.correo = correo;
        this.contrasena = contrasena;
        this.codigo_estudiantil = codigo_estudiantil;
        this.tipo_documento = tipo_documento;
        this.num_documento = num_documento;
        this.rol = rol;
    }
}
