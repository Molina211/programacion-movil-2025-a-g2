import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-enfermero',
  templateUrl: './enfermero.page.html',
  styleUrls: ['./enfermero.page.scss'],
  standalone: true,
  imports: [IonicModule,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EnfermeroPage implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
