import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { InicioSesionFormComponent } from '../../components/inicio-sesion-form/inicio-sesion-form.component';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, InicioSesionFormComponent]
})
export class IniciarSesionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
