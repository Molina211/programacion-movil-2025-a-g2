import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
})
export class ReservaComponent  {

  fecha: string = '';
  hora: string = '';
  fechaHora: string = ''; // Nueva propiedad para mostrar la fecha y hora combinadas

  @Output() cambio = new EventEmitter<{ fecha: string, hora: string }>();

  emitirCambio() {
    const fechaSeleccionada = new Date(this.fecha);
    const horaSeleccionada = new Date(this.hora);
  
    // Formatear fecha y hora
    const fechaFormateada = fechaSeleccionada.toLocaleDateString('es-ES'); // Formato de fecha
    const horaFormateada = horaSeleccionada.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }); // Formato de hora
  
    this.fechaHora = `${fechaFormateada} ${horaFormateada}`; // Combina fecha y hora formateadas
    this.cambio.emit({ fecha: fechaFormateada, hora: horaFormateada });
  }

}
