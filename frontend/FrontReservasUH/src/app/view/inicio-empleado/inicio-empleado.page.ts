import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';

@Component({
  selector: 'app-inicio-empleado',
  templateUrl: './inicio-empleado.page.html',
  styleUrls: ['./inicio-empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class InicioEmpleadoPage implements OnInit {

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
      if (this.router.url === '/inicio-empleado') {
        // No hacer nada
      }
    });
  }

}
