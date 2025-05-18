import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salas } from './salas';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api-url';

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  constructor(private http: HttpClient) { }

  getAll(endpoint: string): Observable<Salas[]> {
    return this.http.get<Salas[]>(`${API_BASE_URL}/${endpoint}`);
  }

  getById(endpoint: string, id: number): Observable<Salas> {
    return this.http.get<Salas>(`${API_BASE_URL}/${endpoint}/${id}`);
  }

  create(endpoint: string, sala: Salas): Observable<Salas> {
    return this.http.post<Salas>(`${API_BASE_URL}/${endpoint}`, sala);
  }

  delete(endpoint: string, id: number): Observable<void> {
    return this.http.delete<void>(`${API_BASE_URL}/${endpoint}/${id}`);
  }
}
