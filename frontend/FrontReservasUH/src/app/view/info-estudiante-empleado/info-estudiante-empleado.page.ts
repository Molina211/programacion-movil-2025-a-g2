import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { InfoEstudianteEmpleadoComponentComponent } from 'src/app/components/info-estudiante-empleado-component/info-estudiante-empleado-component.component';

@Component({
  selector: 'app-info-estudiante-empleado',
  templateUrl: './info-estudiante-empleado.page.html',
  styleUrls: ['./info-estudiante-empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, InfoEstudianteEmpleadoComponentComponent]
})
export class InfoEstudianteEmpleadoPage implements OnInit {

  constructor(private location: Location) {}

  goBack(): void {
    localStorage.removeItem('usuarioSeleccionado');
    this.location.back();
  }


  ngOnInit() {
  }

}
