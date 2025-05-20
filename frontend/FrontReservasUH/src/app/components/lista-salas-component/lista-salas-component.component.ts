import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salas } from 'src/app/service/salas';
import { SalasService } from 'src/app/service/salas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-salas-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-salas-component.component.html',
  styleUrls: ['./lista-salas-component.component.scss'],
})
export class ListaSalasComponentComponent implements OnInit {

  Rol: string | null = null;

  Id: number | null = null;

  salasList: Salas[] = [];

  constructor(private salasService: SalasService, private router: Router) {}

  ngOnInit(): void {
    const storedRol = localStorage.getItem('Rol');
    if (storedRol) {
      this.Rol = storedRol;
    }
    const storedId = localStorage.getItem('Id');
    if (storedId) {
      this.Id = Number(storedId); // Es tipo number
    }
    // Llamada al servicio para obtener las salas
    this.salasService.getAll('salas').subscribe((salas: Salas[]) => {
      // Filtrar para mostrar solo las salas que NO están ocupadas
      this.salasList = salas.filter(sala => sala.estado !== 'Ocupada');
    });
  }

  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'Ocupada':
        return 'estado-ocupada';
      case 'Inactiva':
        return 'estado-inactiva';
      case 'Activa':
        return 'estado-activa';
      default:
        return '';
    }
  }

  onSalaClick(sala: Salas) {
    // Puedes guardar la sala seleccionada en localStorage o en un servicio si lo necesitas
    localStorage.setItem('salaSeleccionada', JSON.stringify(sala));
    this.router.navigate(['/reserva']);
  }
}
