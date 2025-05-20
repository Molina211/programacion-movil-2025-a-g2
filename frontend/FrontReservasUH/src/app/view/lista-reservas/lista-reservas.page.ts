import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { ListaReservasComponentComponent } from 'src/app/components/lista-reservas-component/lista-reservas-component.component';

@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.page.html',
  styleUrls: ['./lista-reservas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ListaReservasComponentComponent]
})
export class ListaReservasPage implements OnInit {

  constructor(private location: Location) {}
  
    goBack(): void {
      this.location.back();
    }

  ngOnInit() {
  }

}
