import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { InfoAdminAdminComponentComponent } from 'src/app/components/info-admin-admin-component/info-admin-admin-component.component';

@Component({
  selector: 'app-info-admin-admin',
  templateUrl: './info-admin-admin.page.html',
  styleUrls: ['./info-admin-admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, InfoAdminAdminComponentComponent]
})
export class InfoAdminAdminPage implements OnInit {

  constructor(private location: Location) {}

  goBack(): void {
    localStorage.removeItem('usuarioSeleccionado');
    this.location.back();
  }

  ngOnInit() {
  }

}
