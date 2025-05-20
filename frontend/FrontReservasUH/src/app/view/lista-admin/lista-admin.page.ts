import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { ListaAdminComponentComponent } from 'src/app/components/lista-admin-component/lista-admin-component.component';

@Component({
  selector: 'app-lista-admin',
  templateUrl: './lista-admin.page.html',
  styleUrls: ['./lista-admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ListaAdminComponentComponent]
})
export class ListaAdminPage implements OnInit {

  constructor(private location: Location) {}
  
    goBack(): void {
      this.location.back();
    }

  ngOnInit() {
  }

}
