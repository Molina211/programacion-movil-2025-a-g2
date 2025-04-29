import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReservaComponent } from "../reserva/reserva.component";
import { IonicModule } from '@ionic/angular';
import { ClienteComponent } from '../cliente/cliente.component';
import { MesaComponent } from '../mesa/mesa.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ClienteComponent, ReservaComponent, MesaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Agrega esto para soportar elementos web
})
export class HomePage {
  constructor() {}
}
