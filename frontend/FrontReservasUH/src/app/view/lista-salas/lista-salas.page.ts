import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { ListaSalasComponentComponent } from '../../components/lista-salas-component/lista-salas-component.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-salas',
  templateUrl: './lista-salas.page.html',
  styleUrls: ['./lista-salas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, ListaSalasComponentComponent]
})
export class ListaSalasPage implements OnInit {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

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
}
