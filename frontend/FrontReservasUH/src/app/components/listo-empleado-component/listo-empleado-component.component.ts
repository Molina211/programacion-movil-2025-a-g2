import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Duracion } from 'src/app/service/duracion';
import { Usuario } from 'src/app/service/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { OrderByNombrePipe } from '../lista-estudiantes-component/order-by-nombre.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listo-empleado-component',
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, FormsModule, OrderByNombrePipe],
  templateUrl: './listo-empleado-component.component.html',
  styleUrls: ['./listo-empleado-component.component.scss'],
})
export class ListoEmpleadoComponentComponent  implements OnInit {

  filtro: string = '';

  duracion: Duracion[] = [];

  Rol: string | null = null;

  Id: number | null = null;

  constructor (private router: Router, private usuarioService: UsuarioService) {}

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
          .filter(u => u.rol === 'EMPLEADO')
          .map(u => ({
            reservas: { usuario: u } as any // Solo para mostrar datos en la vista
          }) as Duracion);
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
      (est.reservas.usuario.num_documento && est.reservas.usuario.num_documento.toString().includes(filtroLower))
    );
  }

  onUsuarioClick(estudiante: Duracion) {
    localStorage.setItem('usuarioSeleccionado', JSON.stringify(estudiante));
    if (this.Rol === 'ADMINISTRADOR') {
      this.router.navigate(['/info-empleado-admin']);
    } else if (this.Rol === 'EMPLEADO') {
      this.router.navigate(['/info-estudiante-empleado']);
    }
  }

}
