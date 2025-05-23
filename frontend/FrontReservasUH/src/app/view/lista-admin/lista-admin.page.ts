import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { ListaAdminComponentComponent } from 'src/app/components/lista-admin-component/lista-admin-component.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-admin',
  templateUrl: './lista-admin.page.html',
  styleUrls: ['./lista-admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink,ListaAdminComponentComponent]
})
export class ListaAdminPage implements OnInit {

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
