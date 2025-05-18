import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Reservas } from 'src/app/service/reservas';

@Component({
  selector: 'app-reserva-registro',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule ],
  templateUrl: './reserva-registro.component.html',
  styleUrls: ['./reserva-registro.component.scss'],
})
export class ReservaRegistroComponent implements OnInit {

  public reserva = new Reservas(0, '', '', '', '', 'Reservada', {id: 0}, {id: 0}); 

  sedes = ['Sede Quirinal', 'Sede Prado Alto'];
  motivos = ['Investigación', 'Trabajo', 'Reunión', 'Proyecto'];

  constructor(private router: Router) {}
  
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

  reservar(form: any) {
    // Obtener Id de usuario y de sala desde localStorage
    const usuarioId = localStorage.getItem('Id');
    const salaSeleccionadaStr = localStorage.getItem('salaSeleccionada');
    let salaId: number | null = null;
    if (salaSeleccionadaStr) {
      try {
        const salaSeleccionada = JSON.parse(salaSeleccionadaStr);
        salaId = salaSeleccionada.id;
      } catch (e) {
        salaId = null;
      }
    }
    if (usuarioId && salaId) {
      this.reserva.usuario = { id: Number(usuarioId) };
      this.reserva.salas = { id: Number(salaId) };
    }
    // Guardar los datos del formulario de reserva en localStorage
    localStorage.setItem('reservaForm', JSON.stringify(this.reserva));
    this.router.navigate(['/resumen-reserva']);
  }

  esFechaValida(fechaStr: string): boolean {
    if (!fechaStr) return false;

    const fecha = new Date(fechaStr);
    const hoy   = new Date();
    // Limite inferior: 1 de enero de 2024
    const inicio = new Date(2024, 0, 1); // enero es 0
    inicio.setHours(0, 0, 0, 0);

    // Limite superior: 5 años desde hoy
    const año   = hoy.getFullYear();
    const finAño = new Date(año + 5, 11, 31);
    finAño.setHours(0, 0, 0, 0);

    fecha.setHours(0, 0, 0, 0);

    return fecha >= inicio && fecha <= finAño;
  }

  esHoraValida(horaStr: string): boolean {
    if (!horaStr) return false;
    // Permitir cualquier hora válida en formato HH:mm
    const [hora, minutos] = horaStr.split(':').map(Number);
    if (isNaN(hora) || isNaN(minutos)) return false;
    return hora >= 0 && hora <= 23 && minutos >= 0 && minutos <= 59;
  }

}
