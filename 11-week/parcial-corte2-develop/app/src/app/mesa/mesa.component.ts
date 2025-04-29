import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-mesa',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss'],
})
export class MesaComponent {

  mesas = [
    { numero: 1, capacidad: 2 },
    { numero: 2, capacidad: 4 },
    { numero: 3, capacidad: 6 },
    { numero: 4, capacidad: 8 }
  ];

  mesaSeleccionada: any = null;
  mesaConfirmada: any = null;

  confirmarSeleccion() {
    this.mesaConfirmada = this.mesaSeleccionada;
  }
}
