import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-inicio-component',
  standalone: true,
  imports: [IonicModule, RouterLink, RouterModule],
  templateUrl: './inicio-component.component.html',
  styleUrls: ['./inicio-component.component.scss'],
})
export class InicioComponentComponent  implements OnInit {

  constructor() { }

  Rol: string | null = null;

  Id: number | null = null;

  ngOnInit(): void {
  const storedRol = localStorage.getItem('Rol');
  if (storedRol) {
    this.Rol = storedRol;
  }
  const storedId = localStorage.getItem('Id');
  if (storedId) {
    this.Id = Number(storedId); // Es tipo number
  }
}

}
