import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { ListoEmpleadoComponentComponent } from 'src/app/components/listo-empleado-component/listo-empleado-component.component';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.page.html',
  styleUrls: ['./lista-empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ListoEmpleadoComponentComponent]
})
export class ListaEmpleadoPage implements OnInit {

  constructor(private location: Location) {}
  
    goBack(): void {
      this.location.back();
    }

  ngOnInit() {
  }

}
