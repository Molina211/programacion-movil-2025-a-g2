import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RegistroFormComponent } from '../../components/registro-form/registro-form.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule, FormsModule, RegistroFormComponent]
})
export class RegistrarUsuarioPage implements OnInit {

  constructor(private location: Location) {}
  
    goBack(): void {
      this.location.back();
    }

    ngOnInit() {
    }
}
