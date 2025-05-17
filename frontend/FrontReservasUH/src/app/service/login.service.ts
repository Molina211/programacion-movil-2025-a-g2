import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { API_BASE_URL } from './api-url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) {}

  login(endpoint: string, credentials: { correo: string; contrasena: string }): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/${endpoint}`, credentials);
  }
}
