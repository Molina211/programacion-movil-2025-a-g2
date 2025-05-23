import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { PerfilEmpleadoComponentComponent } from 'src/app/components/perfil-empleado-component/perfil-empleado-component.component';

@Component({
  selector: 'app-perfil-empleado',
  templateUrl: './perfil-empleado.page.html',
  styleUrls: ['./perfil-empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, PerfilEmpleadoComponentComponent]
})
export class PerfilEmpleadoPage implements OnInit {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
