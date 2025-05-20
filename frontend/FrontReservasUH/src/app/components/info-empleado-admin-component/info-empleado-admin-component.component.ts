import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Duracion } from 'src/app/service/duracion';
import { ReservasService } from 'src/app/service/reservas.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-info-empleado-admin-component',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './info-empleado-admin-component.component.html',
  styleUrls: ['./info-empleado-admin-component.component.scss'],
})
export class InfoEmpleadoAdminComponentComponent  implements OnInit {

  primernombre: string = '';
    segundonombre: string = '';
    primerapellido: string = '';
    segundoapellido: string = '';
    num_documento: string = '';
    correo: string = '';
    Rol: string | null = null;
  
    duracion: Duracion[] = [];
  
    constructor(private reservasService: ReservasService, private router: Router, private usuarioService: UsuarioService) { }
  
    ngOnInit() {
      // Obtener usuario seleccionado
      const usuarioStr = localStorage.getItem('usuarioSeleccionado');
      if (usuarioStr) {
        const reservaUsuario = JSON.parse(usuarioStr);
        this.primernombre = reservaUsuario.reservas.usuario.primernombre || '';
        this.segundonombre = reservaUsuario.reservas.usuario.segundonombre || '';
        this.primerapellido = reservaUsuario.reservas.usuario.primerapellido || '';
        this.segundoapellido = reservaUsuario.reservas.usuario.segundoapellido || '';
        this.num_documento = reservaUsuario.reservas.usuario.num_documento || '';
        this.correo = reservaUsuario.reservas.usuario.correo || '';
      }

      const storedRol = localStorage.getItem('Rol');
      if (storedRol) {
        this.Rol = storedRol;
      }
    }

  editarReserva() {
  const reservaStr = localStorage.getItem('usuarioSeleccionado');

  if (!reservaStr) {
    console.error('No se encontró usuarioSeleccionado en localStorage');
    return;
  }

  const reserva = JSON.parse(reservaStr);

  // Guardamos en localStorage solo el usuario para edición
  localStorage.setItem('reservaForm2', JSON.stringify({ usuario: reserva.reservas.usuario }));
  this.router.navigate(['/registrar-empleado']);
}

eliminarReserva(): void {
  const reservaStr = localStorage.getItem('usuarioSeleccionado');

  if (!reservaStr) {
    console.error('No se encontró usuarioSeleccionado en localStorage');
    return;
  }

  const reserva = JSON.parse(reservaStr);
  const idReserva = reserva.reservas.id;
  const idUsuario = reserva.reservas.usuario?.id;

  if (this.Rol === 'ADMINISTRADOR' && idUsuario) {
    // Eliminar usuario si es ADMINISTRADOR
    this.usuarioService.delete('users', idUsuario).subscribe({
      next: () => {
        console.log(`Usuario con ID ${idUsuario} eliminado correctamente`);
        localStorage.removeItem('usuarioSeleccionado');
        localStorage.removeItem('reservaSeleccionada');
        this.router.navigate(['/inicio-empleado']);
      },
      error: (err: any) => {
        console.error('Error al eliminar el usuario:', err);
      }
    });
    return;
  }

  if (!idReserva) {
    console.error('No se encontró un id de reserva válido en usuarioSeleccionado:', reserva);
    return;
  }

  this.reservasService.delete('reservas', idReserva).subscribe({
    next: () => {
      console.log(`Reserva con ID ${idReserva} eliminada correctamente`);
      localStorage.removeItem('reservaSeleccionada');
      this.router.navigate(['/inicio-empleado']);
    },
    error: (err: any) => {
      console.error('Error al eliminar la reserva:', err);
    }
  });
}

}
