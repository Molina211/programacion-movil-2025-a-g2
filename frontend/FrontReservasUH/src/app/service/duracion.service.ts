import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Duracion } from './duracion';
import { API_BASE_URL } from './api-url';

@Injectable({
  providedIn: 'root'
})
export class DuracionService {
  constructor(private http: HttpClient) { }

  finalizarServicio(reservaId: number): Observable<Duracion> {
    return this.http.post<Duracion>(`${API_BASE_URL}/${reservaId}/finalizar`, {});
  }

  getByReservaId(endpoint: string, reservaId: number): Observable<Duracion> {
    return this.http.get<Duracion>(`${API_BASE_URL}/${endpoint}/${reservaId}`);
  }

  findAllDuraciones(endpoint: string): Observable<Duracion[]> {
    return this.http.get<Duracion[]>(`${API_BASE_URL}/${endpoint}`);
  }
}
