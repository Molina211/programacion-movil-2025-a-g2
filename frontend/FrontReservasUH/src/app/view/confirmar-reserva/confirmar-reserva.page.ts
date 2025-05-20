import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-reserva',
  templateUrl: './confirmar-reserva.page.html',
  styleUrls: ['./confirmar-reserva.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConfirmarReservaPage implements OnInit {

  constructor(private router: Router) { }

  Rol : string | null = null;

  Id : number | null = null;

  ngOnInit() {
    const storedRol = localStorage.getItem('Rol');
    if (storedRol) {
      this.Rol = storedRol;
    }
    const storedId = localStorage.getItem('Id');
    if (storedId) {
      this.Id = Number(storedId); // Es tipo number
    }
  }

  volverInicio() {
    const rol = localStorage.getItem('Rol');
    if (rol === 'ADMINISTRADOR') {
      this.router.navigate(['/inicio-empleado']);
    } else {
      this.router.navigate(['/inicio']);
    }
  }

}
