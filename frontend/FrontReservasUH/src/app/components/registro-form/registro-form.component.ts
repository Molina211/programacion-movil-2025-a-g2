import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from 'src/app/service/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-form',
  standalone: true,
  imports: [IonicModule, RouterModule, FormsModule, CommonModule],
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.scss']
})
export class RegistroFormComponent {

  @ViewChild('confirmPassword', { static: false }) confirmPasswordInput!: ElementRef;

  usuario1: Usuario = {
    id: null,
    primernombre: '',
    segundonombre: '',
    primerapellido: '',
    segundoapellido: '',
    correo: '',
    contrasena: '',
    codigo_estudiantil: 0,
    tipo_documento: 'Codigo Estudiantil',
    num_documento: 0,
    rol: 'ESTUDIANTE'
  }

  mensajeError: string = '';

  Rol: string | null = null;

  Id: number | null = null;

  public estaEditando: boolean = false;

  ngOnInit(): void {
  const storedRol = localStorage.getItem('Rol');
  if (storedRol) {
    this.Rol = storedRol;
  }
  const storedId = localStorage.getItem('Id');
  if (storedId) {
    this.Id = Number(storedId); // Es tipo number
  }
  const reservaEditStr = localStorage.getItem('reservaForm2');
  if (reservaEditStr) {
    const reservaEdit = JSON.parse(reservaEditStr);
    this.usuario1 = reservaEdit.usuario || this.usuario1;
    this.estaEditando = true;
  }
}
  
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  actualizarCodigoEstudiantil(valor: number) {
  this.usuario1.codigo_estudiantil = Number(valor);
  this.usuario1.num_documento = Number(valor);
}

  registrarse(registerForm: NgForm): void {
  if (registerForm.invalid) {
    this.mensajeError = 'Hay campos inválidos. Por favor, revisa el formulario.';
    return;
  }

  if (!this.passwordsIguales()) {
    this.mensajeError = 'Las contraseñas no coinciden.';
    if (this.confirmPasswordInput) {
      this.confirmPasswordInput.nativeElement.value = '';
    }
    return;
  }

  if (this.Rol === 'ADMINISTRADOR' && this.usuario1.id) {
    // Update usuario
    this.usuarioService.update('users', this.usuario1.id, this.usuario1).subscribe({
      next: (response: any) => {
        console.log('Usuario actualizado:', response);
        localStorage.removeItem('reservaForm2');
        localStorage.removeItem('usuarioSeleccionado');
        this.router.navigate(['/lista-estudiantes']);
      },
      error: (error: any) => {
        console.error('Error al actualizar usuario:', error);
        this.mensajeError = 'La actualización ha fallado. Inténtalo de nuevo.';
      }
    });
  } else if (this.Rol === 'ADMINISTRADOR' || this.Rol === 'ESTUDIANTE' || this.Rol === null) {
    // Crear usuario
    this.usuarioService.create('users', this.usuario1).subscribe({
      next: (response: Usuario) => {
        console.log('Registro exitoso:', response);
        if (this.Rol === 'ADMINISTRADOR') {
          this.router.navigate(['/inicio-empleado']);
        } else {
          this.router.navigate(['/iniciar-sesion']);
        }
      },
      error: (error: Usuario) => {
        console.error('Error en el registro:', error);
        this.mensajeError = 'El registro ha fallado. Inténtalo de nuevo.';
      }
    });
  }
}

  passwordsIguales(): boolean {
    const password = this.usuario1.contrasena || '';
    const confirmPassword = this.confirmPasswordInput?.nativeElement.value || '';
    return password === confirmPassword;
  }

  private limpiarFormulario(registerForm: NgForm): void {
    registerForm.resetForm();
    this.usuario1 = new Usuario(null, '', '', '', '', '', '', 0, '', 0, '');
    this.mensajeError = '';
    if (this.confirmPasswordInput) {
      this.confirmPasswordInput.nativeElement.value = '';
    }
  }
}
