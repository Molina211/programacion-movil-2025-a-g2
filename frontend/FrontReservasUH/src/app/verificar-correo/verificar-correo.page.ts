import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { VerificarCorreoFormComponent } from '../components/verificar-correo-form/verificar-correo-form.component';

@Component({
  selector: 'app-verificar-correo',
  templateUrl: './verificar-correo.page.html',
  styleUrls: ['./verificar-correo.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule, FormsModule, VerificarCorreoFormComponent]
})
export class VerificarCorreoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
