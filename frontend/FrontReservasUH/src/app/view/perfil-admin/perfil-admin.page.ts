import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { PerfilAdminComponentComponent } from 'src/app/components/perfil-admin-component/perfil-admin-component.component';

@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.page.html',
  styleUrls: ['./perfil-admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, PerfilAdminComponentComponent]
})
export class PerfilAdminPage implements OnInit {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
