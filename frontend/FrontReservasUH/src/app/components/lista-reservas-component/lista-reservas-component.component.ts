import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Reservas } from 'src/app/service/reservas';
import { ReservasService } from 'src/app/service/reservas.service';
import { Salas } from 'src/app/service/salas';
import { Duracion } from 'src/app/service/duracion';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderByNombrePipe } from '../lista-estudiantes-component/order-by-nombre.pipe';

@Component({
  selector: 'app-lista-reservas-component',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink, OrderByNombrePipe],
  templateUrl: './lista-reservas-component.component.html',
  styleUrls: ['./lista-reservas-component.component.scss'],
})
export class ListaReservasComponentComponent implements OnInit {

  Rol: string | null = null;

  Id: number | null = null;

  reservas: Reservas[] = [];

  filtro: string = '';

  duracion: Duracion[] = [];

  constructor(private reservaService: ReservasService, private router: Router) {}

  ngOnInit(): void {
    const storedRol = localStorage.getItem('Rol');
    if (storedRol) {
      this.Rol = storedRol;
    }
    const storedId = localStorage.getItem('Id');
    if (storedId) {
      this.Id = Number(storedId); // Es tipo number
    }
    this.cargarReservas();
  }

  ionViewWillEnter() {
    // Se ejecuta cada vez que la vista se va a mostrar
    this.cargarReservas();
  }

  cargarReservas() {
    this.reservaService.getAll('reservas').subscribe((reserva: Reservas[]) => {
      this.reservas = reserva;
    });

    if (this.Rol === 'ADMINISTRADOR') {
      this.reservaService.getAll('duracion').subscribe((data: any[]) => {
        this.duracion = (data || []).filter(dur =>
          dur.reservas &&
          (dur.reservas.estado === 'En uso' || dur.reservas.estado === 'Reservada' || dur.reservas.estado === 'Cancelada' || dur.reservas.estado === 'Terminada')
        );
      });
    }
  }

  get estudiantesFiltrados() {
    if (!this.filtro) return this.duracion;
    const filtroLower = this.filtro.toLowerCase();
    return this.duracion.filter(est =>
      (est.reservas?.usuario?.primernombre && est.reservas.usuario.primernombre.toLowerCase().includes(filtroLower)) ||
      (est.reservas?.usuario?.segundonombre && est.reservas.usuario.segundonombre.toLowerCase().includes(filtroLower)) ||
      (est.reservas?.usuario?.primerapellido && est.reservas.usuario.primerapellido.toLowerCase().includes(filtroLower)) ||
      (est.reservas?.usuario?.segundoapellido && est.reservas.usuario.segundoapellido.toLowerCase().includes(filtroLower)) ||
      (est.reservas?.usuario?.correo && est.reservas.usuario.correo.toLowerCase().includes(filtroLower)) ||
      (est.reservas?.usuario?.codigo_estudiantil && est.reservas.usuario.codigo_estudiantil.toString().includes(filtroLower)) ||
      (est.reservas?.estado && est.reservas.estado.toLowerCase().includes(filtroLower)) // Permite filtrar por estado
    );
  }

  onUsuarioClick(estudiante: Duracion) {
    localStorage.setItem('usuarioSeleccionado', JSON.stringify(estudiante));
    this.router.navigate(['/resumen-reserva-empleado', estudiante.reservas.id]);
  }

  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'Cancelada':
        return 'estado-cancelada';
      case 'Terminada':
        return 'estado-terminada';
      case 'En uso':
        return 'estado-en-uso';
      case 'Reservada':
        return 'estado-reservada';
      default:
        return '';
    }
  }

  onSalaClick(reserva: Reservas): void {
    localStorage.setItem('reservaSeleccionada', JSON.stringify(reserva));
    this.router.navigate(['/resumen-reserva-empleado', reserva.id]);
  }

  getNombreCompleto(reserva: Reservas): string {
    if (!reserva.usuario) return '';
    const u = reserva.usuario;
    return `${u.primernombre || ''} ${u.segundonombre || ''} ${u.primerapellido || ''} ${u.segundoapellido || ''}`.replace(/  +/g, ' ').trim();
  }

}
