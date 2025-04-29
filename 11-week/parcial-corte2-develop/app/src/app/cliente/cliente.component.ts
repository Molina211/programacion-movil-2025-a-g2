import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent {

  nombre: string = '';
  telefono: string = '';
  correo: string = '';
  clientes: Array<any> = []; // Lista de clientes

  emitirDatos() {
    // Crear un objeto con los datos del cliente
    const cliente = {
      nombre: this.nombre,
      telefono: this.telefono,
      correo: this.correo
    };

    // Agregar el cliente a la lista
    this.clientes.push(cliente);

    // Limpiar los campos del formulario
    this.nombre = '';
    this.telefono = '';
    this.correo = '';
  }
}

