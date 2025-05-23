import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InicioSesionFormComponent } from '../../components/inicio-sesion-form/inicio-sesion-form.component';
import { IonicModule, Platform } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, InicioSesionFormComponent]
})
export class IniciarSesionPage implements OnInit {

  constructor(private location: Location, private platform: Platform, private router: Router) {}
  
  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      // Si está en la pantalla de login, no permitir volver atrás
      if (this.router.url === '/iniciar-sesion') {
        // No hacer nada o mostrar un mensaje si se desea
      }
    });
  }

}
