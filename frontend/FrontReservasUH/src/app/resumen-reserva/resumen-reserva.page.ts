import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ResumenReservaComponentComponent } from '../components/resumen-reserva-component/resumen-reserva-component.component';

@Component({
  selector: 'app-resumen-reserva',
  templateUrl: './resumen-reserva.page.html',
  styleUrls: ['./resumen-reserva.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ResumenReservaComponentComponent]
})
export class ResumenReservaPage implements OnInit {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
