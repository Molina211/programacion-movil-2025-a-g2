import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-interfaz-principal',
  templateUrl: './interfaz-principal.page.html',
  styleUrls: ['./interfaz-principal.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule, FormsModule]
})
export class InterfazPrincipalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
