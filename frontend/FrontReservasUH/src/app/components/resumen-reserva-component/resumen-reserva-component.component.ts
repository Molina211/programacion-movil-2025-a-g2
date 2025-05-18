import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Reservas } from 'src/app/service/reservas';
import { Duracion } from 'src/app/service/duracion';
import { Usuario } from 'src/app/service/usuario';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ReservasService } from 'src/app/service/reservas.service';

@Component({
  selector: 'app-resumen-reserva-component',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './resumen-reserva-component.component.html',
  styleUrls: ['./resumen-reserva-component.component.scss'],
})
export class ResumenReservaComponentComponent implements OnInit {

  public reserva = new Reservas(0, '', '', '', '', 'Reservada', { id: 0 }, { id: 0 });

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
    private reservasService: ReservasService,
    private toastController: ToastController
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
    const reservaStr = localStorage.getItem('reservaForm');
    if (reservaStr) {
      const reserva = JSON.parse(reservaStr);
      this.sede = reserva.sede || '';
      this.motivo = reserva.motivo || '';
      this.fecha = reserva.fecha || '';
      this.horaEntrada = reserva.hora || '';
      // Calcular hora de salida cada vez que se entra al componente
      this.horaSalida = this.sumarDosMinutos(this.horaEntrada);
      // Obtener sala desde salaSeleccionada
      const salaSeleccionadaStr = localStorage.getItem('salaSeleccionada');
      if (salaSeleccionadaStr) {
        try {
          const salaSeleccionada = JSON.parse(salaSeleccionadaStr);
          this.sala = salaSeleccionada.id;
        } catch (e) {
          this.sala = reserva.salas?.id || 0;
        }
      } else {
        this.sala = reserva.salas?.id || 0;
      }
    }

    // Obtener el nombre del estudiante
    if (this.Id) {
      this.usuarioService.getById('users', this.Id).subscribe((usuario: any) => {
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
    localStorage.removeItem('salaSeleccionada');
    this.router.navigate(['/inicio']);
  }

  onConfirmarReserva() {
    const reservaStr = localStorage.getItem('reservaForm');
    if (reservaStr) {
      const reserva = JSON.parse(reservaStr);
      this.reservasService.create('reservas', reserva).subscribe({
        next: (res) => {
          localStorage.removeItem('reservaForm');
          localStorage.removeItem('salaSeleccionada');
          this.router.navigate(['/confirmar-reserva']);
        },
        error: (err) => {
          console.error('Error al crear la reserva', err);
        }
      });
    }
  }

}