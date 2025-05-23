import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-inicio-sesion-form',
  standalone: true,
  imports: [IonicModule, RouterModule, FormsModule, CommonModule],
  templateUrl: './inicio-sesion-form.component.html',
  styleUrls: ['./inicio-sesion-form.component.scss'],
})
export class InicioSesionFormComponent  implements OnInit {

  usuario1 = {
    correo: '',
    contrasena: ''
  };

  mensajeError: string = ''; // Mensaje de error para mostrar en el frontend

  constructor(private loginService: LoginService, private router: Router) {}

  Rol: string | null = null;

  Id: number | null = null;

  ngOnInit(): void {}

  ingresar(): void {
  this.loginService.login('login', this.usuario1).subscribe(
    response => {
      // Éxito: guardar datos en localStorage y redirigir
      localStorage.setItem('Rol', response.rol);
      localStorage.setItem('Id', response.id);
      if (response.rol === 'EMPLEADO') {
        this.router.navigate(['/inicio-empleado']);
      } else if (response.rol === 'ADMINISTRADOR') {
        this.router.navigate(['/inicio-empleado']);
      } else if (response.rol === 'ESTUDIANTE') {
        this.enviarCodigo();
        this.router.navigate(['/verificar-correo'], {
          state: { correo: this.usuario1.correo }
        });
      }
    },
    error => {
      // Error por código de estado
      switch (error.status) {
        case 404:
          this.mensajeError = 'El correo electrónico no está registrado.';
          break;
        case 401:
          this.mensajeError = 'La contraseña es incorrecta.';
          break;
        default:
          this.mensajeError = 'Credenciales incorrectas.';
      }

      // Limpiar el formulario solo si falló
      this.usuario1 = { correo: '', contrasena: '' };
     }
    );
  }

  enviarCodigo() {
    this.loginService.sendEmail('send-code',this.usuario1.correo).subscribe({
      next: res => console.log('Código enviado', res),
      error: err => console.error('Error al enviar código', err)
    });
  }
}
