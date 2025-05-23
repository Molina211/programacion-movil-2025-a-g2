import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, Platform } from '@ionic/angular';
import { InicioComponentComponent } from '../../components/inicio-component/inicio-component.component';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, InicioComponentComponent]
})
export class InicioPage implements OnInit {

  Rol : string | null = null;

  Id : number | null = null;

  constructor(private platform: Platform, private router: Router) { }

  ngOnInit() {
    const storedRol = localStorage.getItem('Rol');
    if (storedRol) {
      this.Rol = storedRol;
    }
    const storedId = localStorage.getItem('Id');
    if (storedId) {
      this.Id = Number(storedId); // Es tipo number
    }
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.router.url === '/inicio') {
        // No hacer nada
      }
    });
  }

}
