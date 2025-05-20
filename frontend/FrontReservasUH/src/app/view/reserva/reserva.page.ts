import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { ReservaRegistroComponent } from '../../components/reserva-registro/reserva-registro.component';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReservaRegistroComponent]
})
export class ReservaPage implements OnInit {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  Rol : string | null = null;

  Id : number | null = null;

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

  estaEditando: boolean = false;

onCambioModoEdicion(editando: boolean) {
  this.estaEditando = editando;
}

}
