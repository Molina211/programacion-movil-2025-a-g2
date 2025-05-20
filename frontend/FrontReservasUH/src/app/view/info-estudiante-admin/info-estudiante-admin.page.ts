import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { InfoEstudianteAdminComponentComponent } from 'src/app/components/info-estudiante-admin-component/info-estudiante-admin-component.component';

@Component({
  selector: 'app-info-estudiante-admin',
  templateUrl: './info-estudiante-admin.page.html',
  styleUrls: ['./info-estudiante-admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, InfoEstudianteAdminComponentComponent]
})
export class InfoEstudianteAdminPage implements OnInit {

  constructor(private location: Location) {}

  goBack(): void {
    localStorage.removeItem('usuarioSeleccionado');
    this.location.back();
  }

  ngOnInit() {
  }

}
