import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-interfaz-principal',
  templateUrl: './interfaz-principal.page.html',
  styleUrls: ['./interfaz-principal.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule, FormsModule]
})
export class InterfazPrincipalPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
    localStorage.removeItem('Id');
    localStorage.removeItem('Rol');
    localStorage.removeItem('reservaForm');
    localStorage.removeItem('reservaForm2');
    localStorage.removeItem('usuarioSeleccionado');
    localStorage.removeItem('reservaSeleccionada');
    localStorage.removeItem('reservaAdmin');
    localStorage.removeItem('salaSeleccionada');

    // Limpia el historial de navegación para evitar volver atrás
    this.location.replaceState('/interfaz-principal');
  }

}
