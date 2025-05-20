import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { ListaSalasComponentComponent } from '../../components/lista-salas-component/lista-salas-component.component';

@Component({
  selector: 'app-lista-salas',
  templateUrl: './lista-salas.page.html',
  styleUrls: ['./lista-salas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ListaSalasComponentComponent]
})
export class ListaSalasPage implements OnInit {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }
}
