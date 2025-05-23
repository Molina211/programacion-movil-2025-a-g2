import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { ListaEstudiantesComponentComponent } from 'src/app/components/lista-estudiantes-component/lista-estudiantes-component.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.page.html',
  styleUrls: ['./lista-estudiantes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, ListaEstudiantesComponentComponent]
})
export class ListaEstudiantesPage implements OnInit {

  constructor(private location: Location) {}
  
    goBack(): void {
      this.location.back();
    }

    Id: number | null = null;

    Rol: string | null = null;

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
