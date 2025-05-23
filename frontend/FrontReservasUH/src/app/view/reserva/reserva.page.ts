import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { ReservaRegistroComponent } from '../../components/reserva-registro/reserva-registro.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink,ReservaRegistroComponent]
})
export class ReservaPage implements OnInit {

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
