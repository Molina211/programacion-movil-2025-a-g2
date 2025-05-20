import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistrarAdminFormComponent } from 'src/app/components/registrar-admin-form/registrar-admin-form.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registrar-admin',
  templateUrl: './registrar-admin.page.html',
  styleUrls: ['./registrar-admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RegistrarAdminFormComponent]
})
export class RegistrarAdminPage implements OnInit {

  ngOnInit() {
  }

  constructor(private location: Location) {}

  goBack(): void {
    localStorage.removeItem('reservaForm2');
    this.location.back();
  }

}
