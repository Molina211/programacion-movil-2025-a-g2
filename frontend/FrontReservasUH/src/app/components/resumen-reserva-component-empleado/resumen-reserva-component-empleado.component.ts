import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { routes } from 'src/app/app.routes';
import { Duracion } from 'src/app/service/duracion';
import { DuracionService } from 'src/app/service/duracion.service';
import { ReservasService } from 'src/app/service/reservas.service';

@Component({
  selector: 'app-resumen-reserva-component-empleado',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './resumen-reserva-component-empleado.component.html',
  styleUrls: ['./resumen-reserva-component-empleado.component.scss'],
})
export class ResumenReservaComponentEmpleadoComponent  implements OnInit {

  estudianteNombre: string = '';
  sede: string = '';
  motivo: string = '';
  fecha: string = '';
  sala: number = 0;
  horaEntrada: string = '';
  horaSalida: string = '';
  usuarioSeleccionado: any = null;

  estadoReserva: string = '';

  Rol: string | null = null;

  Id: number | null = null;

  constructor(private duracionService: DuracionService, private reservasService: ReservasService, private router: Router) {}

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
    if (this.Rol === 'EMPLEADO') {
      this.cargarDatosEmpleado();
    }
    if (this.Rol === 'ADMINISTRADOR') {
      this.cargarDatosAdministrador();
    }
    if (this.Rol === 'ESTUDIANTE') {
      this.cargarDatosEstudiante();
    }
  }

  ionViewWillEnter() {
    this.cargarDatosEmpleado();
    this.cargarDatosAdministrador();
    this.cargarDatosEstudiante();
  }
  
  editarReserva() {
  const reservaStr = localStorage.getItem('usuarioSeleccionado');

  if (!reservaStr) {
    console.error('No se encontró usuarioSeleccionado en localStorage');
    return;
  }

  const reserva = JSON.parse(reservaStr);

  // Guardamos en localStorage el formulario de reserva
  localStorage.setItem('reservaForm2', JSON.stringify(reserva.reservas));
  localStorage.removeItem('usuarioSeleccionado');
  this.router.navigate(['/reserva']);
}

  finalizarReserva() {
    const reservaStr = localStorage.getItem('usuarioSeleccionado');

  if (!reservaStr) {
    console.error('No se encontró usuarioSeleccionado en localStorage');
    return;
  }

  const reserva = JSON.parse(reservaStr);
  const id = reserva.reservas.id;

  if (!id) {
    console.error('No se encontró un id de reserva válido en usuarioSeleccionado:', reserva);
    return;
  }
  
    this.duracionService.finalizarServicio(id).subscribe({
      next: (duracion: Duracion) => {
        console.log('Reserva finalizada, duración:', duracion);
        this.router.navigate(['/lista-reservas']);
        // Aquí puedes mostrar mensaje, actualizar UI, redirigir, etc.
      },
      error: (error) => {
        console.error('Error al finalizar la reserva', error);
        // Manejo de error, mostrar alerta, etc.
      }
    });
  }

  eliminarReserva(): void {
  const reservaStr = localStorage.getItem('usuarioSeleccionado');

  if (!reservaStr) {
    console.error('No se encontró usuarioSeleccionado en localStorage');
    return;
  }

  const reserva = JSON.parse(reservaStr);
  const id = reserva.reservas.id;

  if (!id) {
    console.error('No se encontró un id de reserva válido en usuarioSeleccionado:', reserva);
    return;
  }

  this.reservasService.delete('reservas', id).subscribe({
    next: () => {
      console.log(`Reserva con ID ${id} eliminada correctamente`);
      localStorage.removeItem('usuarioSeleccionado');
      localStorage.removeItem('reservaSeleccionada');
      this.router.navigate(['/inicio-empleado']);
    },
    error: err => {
      console.error('Error al eliminar la reserva:', err);
    }
  });
}

  cargarDatosEmpleado() {
    const reservaStr = localStorage.getItem('reservaSeleccionada');
    if (reservaStr) {
      const reserva = JSON.parse(reservaStr);
      // Para EMPLEADO, accede directamente a las propiedades de reserva
      this.sede = reserva.sede || '';
      this.motivo = reserva.motivo || '';
      this.fecha = reserva.fecha || '';
      if (reserva.salas && reserva.salas.id) {
        this.sala = reserva.salas.id;
      } else if (reserva.salaId) {
        this.sala = reserva.salaId;
      } else {
        this.sala = 0;
      }
      this.horaEntrada = reserva.hora || '';
      // Sumar 2 minutos a la hora de entrada para la hora de salida
      if (reserva.hora) {
        const [h, m, s] = reserva.hora.split(':').map(Number);
        const date = new Date();
        date.setHours(h, m, s || 0, 0);
        date.setMinutes(date.getMinutes() + 2);
        const horas = date.getHours().toString().padStart(2, '0');
        const minutos = date.getMinutes().toString().padStart(2, '0');
        const segundos = (typeof s !== 'undefined') ? (date.getSeconds().toString().padStart(2, '0')) : undefined;
        this.horaSalida = segundos ? `${horas}:${minutos}:${segundos}` : `${horas}:${minutos}`;
      } else {
        this.horaSalida = '';
      }
      if (reserva.usuario) {
        this.estudianteNombre = `${reserva.usuario.primernombre || ''} ${reserva.usuario.segundonombre || ''} ${reserva.usuario.primerapellido || ''} ${reserva.usuario.segundoapellido || ''}`.replace(/  +/g, ' ').trim();
      }
    }
    // Extra: si existe usuarioSeleccionado, cargar datos de ahí también
    const usuarioSelStr = localStorage.getItem('usuarioSeleccionado');
    if (usuarioSelStr) {
      this.usuarioSeleccionado = JSON.parse(usuarioSelStr);
      this.estudianteNombre = `${this.usuarioSeleccionado.primernombre || ''} ${this.usuarioSeleccionado.segundonombre || ''} ${this.usuarioSeleccionado.primerapellido || ''} ${this.usuarioSeleccionado.segundoapellido || ''}`.replace(/  +/g, ' ').trim();
      // Solo la hora, sin la fecha
      if (this.usuarioSeleccionado.finServicio) {
        const finParts = this.usuarioSeleccionado.finServicio.split(' ');
        this.horaSalida = finParts.length > 1 ? finParts[1] : this.usuarioSeleccionado.finServicio;
      }
      if (this.usuarioSeleccionado.inicioServicio) {
        const iniParts = this.usuarioSeleccionado.inicioServicio.split(' ');
        this.horaEntrada = iniParts.length > 1 ? iniParts[1] : this.usuarioSeleccionado.inicioServicio;
      }
    }

    if (this.usuarioSeleccionado?.reservas?.estado) {
  this.estadoReserva = this.usuarioSeleccionado.reservas.estado;
}
  }

  cargarDatosAdministrador() {
    const usuarioSelStr = localStorage.getItem('usuarioSeleccionado');
    if (usuarioSelStr) {
      this.usuarioSeleccionado = JSON.parse(usuarioSelStr);
      this.estudianteNombre = `${this.usuarioSeleccionado.primernombre || ''} ${this.usuarioSeleccionado.segundonombre || ''} ${this.usuarioSeleccionado.primerapellido || ''} ${this.usuarioSeleccionado.segundoapellido || ''}`.replace(/  +/g, ' ').trim();
      // Solo la hora, sin la fecha
      if (this.usuarioSeleccionado.finServicio) {
        const finParts = this.usuarioSeleccionado.finServicio.split(' ');
        this.horaSalida = finParts.length > 1 ? finParts[1] : this.usuarioSeleccionado.finServicio;
      }
      if (this.usuarioSeleccionado.inicioServicio) {
        const iniParts = this.usuarioSeleccionado.inicioServicio.split(' ');
        this.horaEntrada = iniParts.length > 1 ? iniParts[1] : this.usuarioSeleccionado.inicioServicio;
      }
    }
    // Extra: si existe reservaSeleccionada, cargar datos de ahí también
    const reservaStr = localStorage.getItem('usuarioSeleccionado');
    if (reservaStr) {
      const reserva = JSON.parse(reservaStr);
      if (reserva && reserva.reservas) {
        this.sede = reserva.reservas.sede || '';
        this.motivo = reserva.reservas.motivo || '';
        this.fecha = reserva.reservas.fecha || '';
        if (reserva.reservas.salas && reserva.reservas.salas.id) {
          this.sala = reserva.reservas.salas.id;
        } else if (reserva.reservas.salas === null && reserva.reservas.salaId) {
          this.sala = reserva.reservas.salaId;
        } else if (reserva.salaId) {
          this.sala = reserva.salaId;
        } else {
          this.sala = 0;
        }
        this.horaEntrada = reserva.reservas.hora || this.horaEntrada;
        // Sumar 2 minutos a la hora de entrada para la hora de salida
        if (reserva.hora) {
          const [h, m, s] = reserva.hora.split(':').map(Number);
          const date = new Date();
          date.setHours(h, m, s || 0, 0);
          date.setMinutes(date.getMinutes() + 2);
          const horas = date.getHours().toString().padStart(2, '0');
          const minutos = date.getMinutes().toString().padStart(2, '0');
          const segundos = (typeof s !== 'undefined') ? (date.getSeconds().toString().padStart(2, '0')) : undefined;
          this.horaSalida = segundos ? `${horas}:${minutos}:${segundos}` : `${horas}:${minutos}`;
        } else if (!this.horaSalida) {
          this.horaSalida = '';
        }
        if (reserva.reservas.usuario) {
          this.estudianteNombre = `${reserva.reservas.usuario.primernombre || ''} ${reserva.reservas.usuario.segundonombre || ''} ${reserva.reservas.usuario.primerapellido || ''} ${reserva.reservas.usuario.segundoapellido || ''}`.replace(/  +/g, ' ').trim();
        }
      }
    }
    if (this.usuarioSeleccionado.reservas.estado) {
  this.estadoReserva = this.usuarioSeleccionado.reservas.estado;
}
  }

  cargarDatosEstudiante() {
    const storedId = localStorage.getItem('Id');
    if (storedId) {
      this.Id = Number(storedId);
      const reservaStr = localStorage.getItem('reservaSeleccionada');
      if (reservaStr) {
        const reserva = JSON.parse(reservaStr);
        if (reserva.usuario && reserva.usuario.id === this.Id) {
          this.sede = reserva.sede || '';
          this.motivo = reserva.motivo || '';
          this.fecha = reserva.fecha || '';
          if (reserva.salas && reserva.salas.id) {
            this.sala = reserva.salas.id;
          } else if (reserva.salaId) {
            this.sala = reserva.salaId;
          } else {
            this.sala = 0;
          }
          this.horaEntrada = reserva.hora || '';
          if (reserva.hora) {
            const [h, m, s] = reserva.hora.split(':').map(Number);
            const date = new Date();
            date.setHours(h, m, s || 0, 0);
            date.setMinutes(date.getMinutes() + 2);
            const horas = date.getHours().toString().padStart(2, '0');
            const minutos = date.getMinutes().toString().padStart(2, '0');
            const segundos = (typeof s !== 'undefined') ? (date.getSeconds().toString().padStart(2, '0')) : undefined;
            this.horaSalida = segundos ? `${horas}:${minutos}:${segundos}` : `${horas}:${minutos}`;
          } else {
            this.horaSalida = '';
          }
          this.estudianteNombre = `${reserva.usuario.primernombre || ''} ${reserva.usuario.segundonombre || ''} ${reserva.usuario.primerapellido || ''} ${reserva.usuario.segundoapellido || ''}`.replace(/  +/g, ' ').trim();
          // Obtener estado de la reserva para el estudiante
          if (reserva.estado) {
            this.estadoReserva = reserva.estado;
          } else if (reserva.reservas && reserva.reservas.estado) {
            this.estadoReserva = reserva.reservas.estado;
          }
        }
      }
    }
    // Extra: si existe usuarioSeleccionado, cargar datos de ahí también
    const usuarioSelStr = localStorage.getItem('usuarioSeleccionado');
    if (usuarioSelStr) {
      this.usuarioSeleccionado = JSON.parse(usuarioSelStr);
      this.estudianteNombre = `${this.usuarioSeleccionado.primernombre || ''} ${this.usuarioSeleccionado.segundonombre || ''} ${this.usuarioSeleccionado.primerapellido || ''} ${this.usuarioSeleccionado.segundoapellido || ''}`.replace(/  +/g, ' ').trim();
      if (this.usuarioSeleccionado.finServicio) {
        const finParts = this.usuarioSeleccionado.finServicio.split(' ');
        this.horaSalida = finParts.length > 1 ? finParts[1] : this.usuarioSeleccionado.finServicio;
      }
      if (this.usuarioSeleccionado.inicioServicio) {
        const iniParts = this.usuarioSeleccionado.inicioServicio.split(' ');
        this.horaEntrada = iniParts.length > 1 ? iniParts[1] : this.usuarioSeleccionado.inicioServicio;
      }
      // Obtener estado de la reserva para el estudiante desde usuarioSeleccionado
      if (this.usuarioSeleccionado.estado) {
        this.estadoReserva = this.usuarioSeleccionado.estado;
      } else if (this.usuarioSeleccionado.reservas && this.usuarioSeleccionado.reservas.estado) {
        this.estadoReserva = this.usuarioSeleccionado.reservas.estado;
      }
    }
    // Debug: mostrar en consola el estado obtenido
    console.log('Rol:', this.Rol, 'estadoReserva:', this.estadoReserva);
  }

  cancelarReserva() {
    const reservaStr = localStorage.getItem('reservaSeleccionada');
    if (!reservaStr) {
      console.error('No se encontró usuarioSeleccionado en localStorage');
      return;
    }
    const reserva = JSON.parse(reservaStr);
    console.log('Objeto reserva en cancelarReserva:', reserva);
    // Intenta obtener el id de varias formas y fuerza a number
    let id = reserva.reservas?.id || reserva.id || reserva.reservaId;
    id = Number(id);
    if (!id || isNaN(id)) {
      console.error('No se encontró un id de reserva válido en usuarioSeleccionado:', reserva);
      return;
    }
    this.reservasService.actualizarEstadoReserva('reservas', id, 'Cancelada').subscribe({
      next: () => {
        console.log('Reserva cancelada correctamente');
        localStorage.removeItem('usuarioSeleccionado');
        localStorage.removeItem('reservaSeleccionada');
        this.router.navigate(['/inicio']);
      },
      error: err => {
        console.error('Error al cancelar la reserva:', err);
      }
    });
  }
}
