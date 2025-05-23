import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { PerfilEstudianteComponentComponent } from 'src/app/components/perfil-estudiante-component/perfil-estudiante-component.component';

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.page.html',
  styleUrls: ['./perfil-estudiante.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, PerfilEstudianteComponentComponent]
})
export class PerfilEstudiantePage implements OnInit {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
