import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-perfil-empleado-component',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './perfil-empleado-component.component.html',
  styleUrls: ['./perfil-empleado-component.component.scss'],
})
export class PerfilEmpleadoComponentComponent  implements OnInit {

  primernombre: string = '';
    segundonombre: string = '';
    primerapellido: string = '';
    segundoapellido: string = '';
    num_documento: string = '';
    correo: string = '';
    Rol: string | null = null;

    Id: number | null = null;
  
    constructor(private router: Router, private usuarioService: UsuarioService) { }
  
    ngOnInit() {
      const storedRol = localStorage.getItem('Rol');
      if (storedRol) {
        this.Rol = storedRol;
      }
      const storedId = localStorage.getItem('Id');
      if (storedId) {
        this.Id = Number(storedId);
        this.usuarioService.getById('users', this.Id).subscribe((usuario: any) => {
          this.primernombre = usuario.primernombre || '';
          this.segundonombre = usuario.segundonombre || '';
          this.primerapellido = usuario.primerapellido || '';
          this.segundoapellido = usuario.segundoapellido || '';
          this.num_documento = usuario.num_documento || '';
          this.correo = usuario.correo || '';
        });
      }
    }

  editarReserva() {
  // Obtener el ID del usuario desde localStorage
  const storedId = localStorage.getItem('Id');
  if (!storedId) {
    console.error('No se encontró Id en localStorage');
    return;
  }
  const id = Number(storedId);
  this.usuarioService.getById('users', id).subscribe((usuario: any) => {
    // Guardamos en localStorage solo el usuario para edición
    localStorage.setItem('reservaForm2', JSON.stringify({ usuario }));
    this.router.navigate(['/registrar-empleado']);
  });
}

cerrarSesion() {
  localStorage.removeItem('Id');
  localStorage.removeItem('Rol');
  this.router.navigate(['/interfaz-principal']);
}

}
