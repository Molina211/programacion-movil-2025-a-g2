import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { RegistrarEmpleadoFormComponent } from 'src/app/components/registrar-empleado-form/registrar-empleado-form.component';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.page.html',
  styleUrls: ['./registrar-empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RegistrarEmpleadoFormComponent]
})
export class RegistrarEmpleadoPage implements OnInit {

  ngOnInit() {
  }

  constructor(private location: Location) {}

  goBack(): void {
    localStorage.removeItem('reservaForm2');
    this.location.back();
  }

}
