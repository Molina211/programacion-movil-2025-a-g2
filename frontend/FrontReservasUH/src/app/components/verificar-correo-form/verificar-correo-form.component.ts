import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-verificar-correo-form',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './verificar-correo-form.component.html',
  styleUrls: ['./verificar-correo-form.component.scss'],
})
export class VerificarCorreoFormComponent  implements OnInit, AfterViewInit {

  correo: string = '';

  codigo: string = '';

  inputs = Array(6).fill(0); // 6 casillas

  @ViewChildren('codeInput') codeInputs!: QueryList<ElementRef>;
  
  intentosFallidos: number = 0;

  maxIntentos: number = 3;

  Rol: string | null = null;

  mensajeError: string = ''; // Mensaje de error para mostrar en el frontend

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    const storedRol = localStorage.getItem('Rol');  
      if (storedRol) {
        this.Rol = storedRol; // Aquí se asigna directamente sin parsear
      }
      const nav = this.router.getCurrentNavigation();
      const state = nav?.extras?.state as { correo?: string };
      if (state?.correo) {
      this.correo = state.correo;
  }
  }

  enviarCodigo() {
  if (this.puedeEnviarCodigo === false) {
    console.warn('Debes esperar antes de enviar otro código.');
    return;
  }

  this.puedeEnviarCodigo = false;

  this.loginService.sendEmail('send-code', this.correo).subscribe({
    next: res => {
      console.log('Código enviado', res);
      // Después de enviar, iniciar el timer para permitir nuevo envío después de 1 minuto
      setTimeout(() => {
        this.puedeEnviarCodigo = true;
      }, 60000); // 60000 ms = 1 minuto
    },
    error: err => {
      console.error('Error al enviar código', err);
      // En caso de error, también permitir reintento inmediato (opcional)
      this.puedeEnviarCodigo = true;
    }
  });
}

// Inicializa esta variable en tu componente:
puedeEnviarCodigo = true;

  verificarCodigo() {
  this.loginService.codeValidation('verify-code', this.correo, this.codigo)
    .subscribe({
      next: (res: any) => {
        console.log('Respuesta:', res);
        if (res.includes('Código verificado')) {
          this.router.navigate(['/inicio']);
        }
      },
      error: err => {
        console.error('Error al verificar código', err);
      }
    });
}
  
  ngAfterViewInit(): void {
  const inputsArray = this.codeInputs.toArray();

  inputsArray.forEach((inputRef, index) => {
    const inputEl = inputRef.nativeElement;

    // Evento input normal
    inputEl.addEventListener('input', (event: any) => {
      const value = event.target.value;

      if (value.length === 1 && index < inputsArray.length - 1) {
        inputsArray[index + 1].nativeElement.focus();
      }

      this.updateCodigo();
    });

    // Evento de retroceso para moverse hacia atrás
    inputEl.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Backspace' && !inputEl.value && index > 0) {
        inputsArray[index - 1].nativeElement.focus();
      }
    });

    // Evento para manejar pegado
    inputEl.addEventListener('paste', (event: ClipboardEvent) => {
      event.preventDefault();

      const pastedData = event.clipboardData?.getData('text') ?? '';
      const chars = pastedData.replace(/\D/g, '').slice(0, 6).split(''); // Solo dígitos

      chars.forEach((char, i) => {
        if (index + i < inputsArray.length) {
          inputsArray[index + i].nativeElement.value = char;
        }
      });

      const nextIndex = index + chars.length;
      if (nextIndex < inputsArray.length) {
        inputsArray[nextIndex].nativeElement.focus();
      } else {
        inputsArray[inputsArray.length - 1].nativeElement.focus();
      }

      this.updateCodigo();
    });
  });
}

  updateCodigo(): void {
  this.codigo = this.codeInputs
    .map(input => input.nativeElement.value)
    .join('');
}

}
