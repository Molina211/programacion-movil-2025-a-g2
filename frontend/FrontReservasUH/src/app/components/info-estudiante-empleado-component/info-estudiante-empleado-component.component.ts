import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Duracion } from 'src/app/service/duracion';
import { Reservas } from 'src/app/service/reservas';
import { ReservasService } from 'src/app/service/reservas.service';

@Component({
  selector: 'app-info-estudiante-empleado-component',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './info-estudiante-empleado-component.component.html',
  styleUrls: ['./info-estudiante-empleado-component.component.scss'],
})
export class InfoEstudianteEmpleadoComponentComponent  implements OnInit {

  salaReservada: number = 0;
  tiempoSala: string = '';
  motivo: string = '';
  primernombre: string = '';
  segundonombre: string = '';
  primerapellido: string = '';
  segundoapellido: string = '';
  codigo_estudiantil: string = '';
  sede: string = '';

  duracion: Duracion[] = [];

  constructor() { }

  ngOnInit() {
    // Obtener usuario seleccionado
    const usuarioStr = localStorage.getItem('usuarioSeleccionado');
    if (usuarioStr) {
      const reservaUsuario = JSON.parse(usuarioStr);
      this.primernombre = reservaUsuario.reservas.usuario.primernombre || '';
      this.segundonombre = reservaUsuario.reservas.usuario.segundonombre || '';
      this.primerapellido = reservaUsuario.reservas.usuario.primerapellido || '';
      this.segundoapellido = reservaUsuario.reservas.usuario.segundoapellido || '';
      this.motivo = reservaUsuario.reservas.motivo || '';
      this.sede = reservaUsuario.reservas.sede || '';
      this.codigo_estudiantil = reservaUsuario.reservas.usuario.codigo_estudiantil || '';
      this.salaReservada = reservaUsuario.reservas.salas.id || 0;
      // Calcular tiempo en sala en formato mm:ss
      if (reservaUsuario.inicioServicio) {
        const inicio = new Date(reservaUsuario.inicioServicio);
        const ahora = new Date();
        const diffMs = ahora.getTime() - inicio.getTime();
        const diffSecs = Math.floor(diffMs / 1000);
        const minutos = Math.floor(diffSecs / 60);
        const segundos = diffSecs % 60;
        this.tiempoSala = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
      } else {
        this.tiempoSala = '00:00';
      }
    }
  }

}
