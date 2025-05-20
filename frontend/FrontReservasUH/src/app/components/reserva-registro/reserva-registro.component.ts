import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Reservas } from 'src/app/service/reservas';
import { SalasService } from 'src/app/service/salas.service';
import { Salas } from 'src/app/service/salas';
import { Usuario } from 'src/app/service/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ReservasService } from 'src/app/service/reservas.service';

@Component({
  selector: 'app-reserva-registro',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './reserva-registro.component.html',
  styleUrls: ['./reserva-registro.component.scss'],
})
export class ReservaRegistroComponent implements OnInit {

  public reserva = new Reservas(0, '', '', '', '', 'Reservada', new Salas(0, '', ''), new Usuario(null, '', '', '', '', '', '', 0, '', 0, ''));

  @Output() modoEdicion = new EventEmitter<boolean>();
  
  sedes = ['Sede Quirinal', 'Sede Prado Alto'];
  motivos = ['Investigación', 'Trabajo', 'Reunión', 'Proyecto'];

  reservas: Reservas[] = [];
  estudiantesSinReserva: Usuario[] = [];
  salasDisponibles: Salas[] = [];

  // IDs para binding de selects en modo ADMINISTRADOR
  public usuarioId: number | null = null;
  public salaId: number | null = null;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private reservasService: ReservasService,
    private salasService: SalasService,
  ) {}
  
  Rol: string | null = null;

  Id: number | null = null;

  ngOnInit(): void {
  const storedRol = localStorage.getItem('Rol');
  if (storedRol) {
    this.Rol = storedRol;
  }
  const storedId = localStorage.getItem('Id');
  if (storedId) {
    this.Id = Number(storedId); // Es tipo number
  }

  // Verificar si hay una reserva para editar
  const reservaEditStr = localStorage.getItem('reservaForm2');
  if (reservaEditStr) {
    const reservaEdit = JSON.parse(reservaEditStr);
    this.reserva = reservaEdit;

    // Cargar IDs para ADMINISTRADOR
    if (reservaEdit.usuario && reservaEdit.usuario.id) {
      this.usuarioId = reservaEdit.usuario.id;
    }
    if (reservaEdit.salas && reservaEdit.salas.id) {
      this.salaId = reservaEdit.salas.id;
    } else if (reservaEdit.salaId) {
      this.salaId = reservaEdit.salaId;
    }
  }

  if (this.Rol === 'ADMINISTRADOR') {
    this.cargarDatosAdministrador();
  }

}
  ionViewWillEnter() {
     if (this.Rol === 'ADMINISTRADOR') {
    this.cargarDatosAdministrador();
  }
  }

  cargarDatosAdministrador() {
    this.usuarioService.getAll('users').subscribe((usuarios: Usuario[]) => {
      this.reservasService.getAll('reservas').subscribe((reservas: Reservas[]) => {
        // IDs de usuarios con reserva activa
        const usuariosConReserva = reservas.filter(r => r.estado === 'En uso' || r.estado === 'Reservada')
          .map(r => r.usuario?.id);
        this.estudiantesSinReserva = usuarios.filter(u => u.rol === 'ESTUDIANTE' && !usuariosConReserva.includes(u.id));
      });
    });
    this.salasService.getAll('salas').subscribe((salas: Salas[]) => {
      this.salasDisponibles = salas.filter(s => s.estado !== 'Ocupada');
    });
  }

  reservar(form: any) {
  let usuarioId: number | null = null;
  let salaId: number | null = null;

  if (this.Rol === 'ADMINISTRADOR') {
    if (!this.usuarioId || !this.salaId) {
      console.log('Debe seleccionar un estudiante y una sala antes de reservar.');
      return;
    }
    usuarioId = this.usuarioId;
    salaId = this.salaId;
  } else {
    const storedUsuarioId = localStorage.getItem('Id');
    const salaSeleccionadaStr = localStorage.getItem('salaSeleccionada');
    if (storedUsuarioId && salaSeleccionadaStr) {
      usuarioId = Number(storedUsuarioId);
      try {
        salaId = JSON.parse(salaSeleccionadaStr).id;
      } catch {
        salaId = null;
      }
    }
    if (!usuarioId || !salaId) {
      console.log('Debe seleccionar una sala antes de reservar.');
      return;
    }
  }

  const reservaUpdate = {
    id: this.reserva.id,
    sede: this.reserva.sede,
    motivo: this.reserva.motivo,
    fecha: this.reserva.fecha,
    hora: this.reserva.hora,
    estado: this.reserva.estado,
    salas: { id: salaId },
    usuario: { id: usuarioId }
  };

  console.log('Objeto enviado al backend:', JSON.stringify(reservaUpdate, null, 2));

  if (this.reserva.id && this.reserva.id > 0) {
    this.reservasService.update('reservas', reservaUpdate as any, this.reserva.id).subscribe({
      next: () => {
        localStorage.removeItem('reservaForm2');
        this.router.navigate(['/inicio-empleado']);
      },
      error: (err) => {
        console.error('Error al actualizar reserva:', err);
      }
    });
  } else {
      localStorage.setItem('reservaAdmin', JSON.stringify(reservaUpdate));
      this.router.navigate(['/resumen-reserva']);   
  }
}

  esFechaValida(fechaStr: string): boolean {
    if (!fechaStr) return false;

    const fecha = new Date(fechaStr);
    const hoy   = new Date();
    // Limite inferior: 1 de enero de 2024
    const inicio = new Date(2024, 0, 1); // enero es 0
    inicio.setHours(0, 0, 0, 0);

    // Limite superior: 5 años desde hoy
    const año   = hoy.getFullYear();
    const finAño = new Date(año + 5, 11, 31);
    finAño.setHours(0, 0, 0, 0);

    fecha.setHours(0, 0, 0, 0);

    return fecha >= inicio && fecha <= finAño;
  }

  esHoraValida(horaStr: string): boolean {
    if (!horaStr) return false;
    // Permitir cualquier hora válida en formato HH:mm
    const [hora, minutos] = horaStr.split(':').map(Number);
    if (isNaN(hora) || isNaN(minutos)) return false;
    return hora >= 0 && hora <= 23 && minutos >= 0 && minutos <= 59;
  }

}
