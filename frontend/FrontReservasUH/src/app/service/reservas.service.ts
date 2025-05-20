import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservas } from './reservas';
import { API_BASE_URL } from './api-url';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient) { }

  getAll(endpoint: string): Observable<Reservas[]> {
    return this.http.get<Reservas[]>(`${API_BASE_URL}/${endpoint}`);
  }

  getById(endpoint: string, id: number): Observable<Reservas> {
    return this.http.get<Reservas>(`${API_BASE_URL}/${endpoint}/${id}`);
  }

  create(endpoint: string, reserva: Reservas): Observable<Reservas> {
    return this.http.post<Reservas>(`${API_BASE_URL}/${endpoint}`, reserva);
  }

  delete(endpoint: string, id: number): Observable<any> {
  return this.http.delete(`${API_BASE_URL}/${endpoint}/${id}`, { responseType: 'text' });
}

  getByEstado(endpoint: string, estado: string): Observable<Reservas[]> {
    return this.http.get<Reservas[]>(`${API_BASE_URL}/${endpoint}/estado/${estado}`);
  }

  update(endpoint: string, reserva: Reservas, id: number): Observable<any> {
    return this.http.put(`${API_BASE_URL}/${endpoint}/${id}`, reserva, { responseType: 'text' });
  }
}
