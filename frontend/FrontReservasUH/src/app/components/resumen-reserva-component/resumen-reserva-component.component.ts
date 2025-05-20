import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Reservas } from 'src/app/service/reservas';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ReservasService } from 'src/app/service/reservas.service';
import { Usuario } from 'src/app/service/usuario';
import { Salas } from 'src/app/service/salas';

@Component({
  selector: 'app-resumen-reserva-component',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './resumen-reserva-component.component.html',
  styleUrls: ['./resumen-reserva-component.component.scss'],
})
export class ResumenReservaComponentComponent implements OnInit {

  public reserva = new Reservas(0, '', '', '', '', 'Reservada', new Salas(0, '', ''), new Usuario(null, '', '', '', '', '', '', 0, '', 0, ''));

  estudianteNombre: string = '';
  sede: string = '';
  motivo: string = '';
  fecha: string = '';
  sala: number = 0;
  horaEntrada: string = '';
  horaSalida: string = '';

  Rol: string | null = null;

  Id: number | null = null;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private reservasService: ReservasService
  ) {}

  ngOnInit() {
    // Obtener datos de usuario
    const storedRol = localStorage.getItem('Rol');
    if (storedRol) {
      this.Rol = storedRol;
    }
    const storedId = localStorage.getItem('Id');
    if (storedId) {
      this.Id = Number(storedId);
    }

    // Obtener reserva desde localStorage
    const reservaStr = localStorage.getItem('reservaForm') || localStorage.getItem('reservaAdmin');
    if (reservaStr) {
      const reserva = JSON.parse(reservaStr);
      // Asegura que solo se pase el id de sala y usuario a los métodos/servicios
      this.sede = reserva.sede || '';
      this.motivo = reserva.motivo || '';
      this.fecha = reserva.fecha || '';
      this.horaEntrada = reserva.hora || '';
      this.horaSalida = this.sumarDosMinutos(this.horaEntrada);
      // Obtener sala desde salaSeleccionada
      const salaSeleccionadaStr = localStorage.getItem('salaSeleccionada');
      if (salaSeleccionadaStr) {
        try {
          const salaSeleccionada = JSON.parse(salaSeleccionadaStr);
          this.sala = salaSeleccionada.id;
        } catch (e) {
          this.sala = reserva.salas.id || 0;
        }
      } else {
        this.sala = reserva.salas.id || 0;
      }
      // Sobrescribe reserva.salas y reserva.usuario para que solo tengan el id
      reserva.salas = { id: reserva.salas.id || this.sala };
      reserva.usuario = { id: reserva.usuario.id || this.Id };
      this.reserva = reserva;
    }

    // Obtener el nombre del estudiante (depende del rol)
    let estudianteId: number | null = null;
    if (this.Rol === 'ADMINISTRADOR' && this.reserva.usuario && this.reserva.usuario.id) {
      estudianteId = this.reserva.usuario.id;
    } else if (this.Id) {
      estudianteId = this.Id;
    }
    if (estudianteId) {
      this.usuarioService.getById('users', estudianteId).subscribe((usuario: any) => {
        this.estudianteNombre = `${usuario.primernombre} ${usuario.segundonombre} ${usuario.primerapellido} ${usuario.segundoapellido}`.replace(/  +/g, ' ').trim();
      });
    }
  }

  sumarDosMinutos(hora: string): string {
  if (!hora) return '';
  const [h, m] = hora.split(':').map(Number);
  const date = new Date();
  date.setHours(h, m, 0, 0);
  date.setMinutes(date.getMinutes() + 2); // suma fija de 2 minutos
  return date.toTimeString().slice(0, 5);
}

  onCancelarReserva() {
    localStorage.removeItem('reservaForm');
    localStorage.removeItem('reservaForm2');
    localStorage.removeItem('reservaAdmin');
    localStorage.removeItem('salaSeleccionada');
    if (this.Rol === 'ADMINISTRADOR') {
      this.router.navigate(['/lista-reservas']);
    } else {
      this.router.navigate(['/inicio']);
    }
  }

  onConfirmarReserva() {
    let reservaStr: string | null = null;
    if (this.Rol === 'ADMINISTRADOR' || this.Rol === 'ESTUDIANTE') {
      reservaStr = localStorage.getItem('reservaAdmin');
    }
    if (reservaStr) {
      const reserva = JSON.parse(reservaStr);
      // Sobrescribe reserva.salas y reserva.usuario para que solo tengan el id
      reserva.salas = { id: reserva.salas?.id || this.sala };
      reserva.usuario = { id: reserva.usuario?.id || this.Id };
      this.reservasService.create('reservas', reserva).subscribe({
        next: (res) => {
          localStorage.removeItem('reservaAdmin');
          localStorage.removeItem('reservaForm2');
          localStorage.removeItem('reservaForm');
          localStorage.removeItem('salaSeleccionada');
          this.router.navigate(['/confirmar-reserva']);
          console.log('Reserva creada con éxito', res);
        },
        error: (err) => {
          console.error('Error al crear la reserva', err);
          console.error('Error al crear la reserva: ' + (err?.error?.message || err.message || err));
        }
      });
    } else {
      console.log('No se encontró información de la reserva para crear.');
    }
  }

}