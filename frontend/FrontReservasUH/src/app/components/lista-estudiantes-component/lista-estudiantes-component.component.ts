import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from 'src/app/service/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { OrderByNombrePipe } from './order-by-nombre.pipe';
import { Duracion } from 'src/app/service/duracion';
import { DuracionService } from 'src/app/service/duracion.service';

@Component({
  selector: 'app-lista-estudiantes-component',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink, OrderByNombrePipe],
  templateUrl: './lista-estudiantes-component.component.html',
  styleUrls: ['./lista-estudiantes-component.component.scss'],
})
export class ListaEstudiantesComponentComponent implements OnInit {
  
  filtro: string = '';

  duracion: Duracion[] = [];

  Rol: string | null = null;

  Id: number | null = null;

  constructor(private duracionService: DuracionService, private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit() {
    const storedRol = localStorage.getItem('Rol');
    if (storedRol) {
      this.Rol = storedRol;
    }
    const storedId = localStorage.getItem('Id');
    if (storedId) {
      this.Id = Number(storedId); // Es tipo number
    }
    this.cargarEstudiantes();
  }

  ionViewWillEnter(){
    this.cargarEstudiantes();
  }

  cargarEstudiantes() {
    if (this.Rol === 'ADMINISTRADOR') {
      // Mostrar todos los estudiantes registrados
      this.usuarioService.getAll('users').subscribe((usuarios: Usuario[]) => {
        this.duracion = usuarios
          .filter(u => u.rol === 'ESTUDIANTE')
          .map(u => ({
            reservas: { usuario: u } as any // Solo para mostrar datos en la vista
          }) as Duracion);
      });
    } else {
      // Mostrar solo estudiantes con reserva en uso
      this.duracionService.findAllDuraciones('duracion').subscribe((data: Duracion[]) => {
        this.duracion = data.filter(dur => dur.reservas.estado === 'En uso');
      });
    }
  }

  get estudiantesFiltrados() {
    if (!this.filtro) return this.duracion;
    const filtroLower = this.filtro.toLowerCase();
    return this.duracion.filter(est =>
      (est.reservas.usuario.primernombre && est.reservas.usuario.primernombre.toLowerCase().includes(filtroLower)) ||
      (est.reservas.usuario.segundonombre && est.reservas.usuario.segundonombre.toLowerCase().includes(filtroLower)) ||
      (est.reservas.usuario.primerapellido && est.reservas.usuario.primerapellido.toLowerCase().includes(filtroLower)) ||
      (est.reservas.usuario.segundoapellido && est.reservas.usuario.segundoapellido.toLowerCase().includes(filtroLower)) ||
      (est.reservas.usuario.correo && est.reservas.usuario.correo.toLowerCase().includes(filtroLower)) ||
      (est.reservas.usuario.codigo_estudiantil && est.reservas.usuario.codigo_estudiantil.toString().includes(filtroLower))
    );
  }

  onUsuarioClick(estudiante: Duracion) {
    localStorage.setItem('usuarioSeleccionado', JSON.stringify(estudiante));
    if (this.Rol === 'ADMINISTRADOR') {
      this.router.navigate(['/info-estudiante-admin']);
    } else if (this.Rol === 'EMPLEADO') {
      this.router.navigate(['/info-estudiante-empleado']);
    }
  }
}
