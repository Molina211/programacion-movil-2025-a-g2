import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { API_BASE_URL } from './api-url';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public dataChanged$ = new Subject<void>();
  
  constructor(private http: HttpClient) {}

  getAll(endpoint: string) {
    return this.http.get(`${API_BASE_URL}/${endpoint}`);
  }

  getById(endpoint: string, id: number) {
    return this.http.get(`${API_BASE_URL}/${endpoint}/${id}`);
  }

  create(endpoint: string, data: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${API_BASE_URL}/${endpoint}`, data);
  }

  update(endpoint: string, id: number, data: Usuario) {
    return this.http.put(`${API_BASE_URL}/${endpoint}/${id}`, data);
  }

  delete(endpoint: string, id: number) {
    return this.http.delete(`${API_BASE_URL}/${endpoint}/${id}`);
  }
}
