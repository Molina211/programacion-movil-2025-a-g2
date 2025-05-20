import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { ResumenReservaComponentEmpleadoComponent } from 'src/app/components/resumen-reserva-component-empleado/resumen-reserva-component-empleado.component';

@Component({
  selector: 'app-resumen-reserva-empleado',
  templateUrl: './resumen-reserva-empleado.page.html',
  styleUrls: ['./resumen-reserva-empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ResumenReservaComponentEmpleadoComponent]
})
export class ResumenReservaEmpleadoPage implements OnInit {

  constructor(private location: Location) {}
  
    goBack(): void {
      localStorage.removeItem('reservaSeleccionada');
      localStorage.removeItem('usuarioSeleccionado');
      this.location.back();
    }

  ngOnInit() {
  }

}
