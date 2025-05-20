import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { InfoEmpleadoAdminComponentComponent } from 'src/app/components/info-empleado-admin-component/info-empleado-admin-component.component';

@Component({
  selector: 'app-info-empleado-admin',
  templateUrl: './info-empleado-admin.page.html',
  styleUrls: ['./info-empleado-admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, InfoEmpleadoAdminComponentComponent]
})
export class InfoEmpleadoAdminPage implements OnInit {

  constructor(private location: Location) {}

  goBack(): void {
    localStorage.removeItem('usuarioSeleccionado');
    this.location.back();
  }

  ngOnInit() {
  }

}
