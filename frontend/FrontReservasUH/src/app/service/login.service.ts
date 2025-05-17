import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api-url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) {}

  login(endpoint: string, credentials: { correo: string; contrasena: string }): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/${endpoint}`, credentials);
  }

  sendEmail(endpoint: string, correo: string): Observable<any> {
  return this.http.post(`${API_BASE_URL}/${endpoint}`, { correo }, { responseType: 'text' });
}

  codeValidation(endpoint: string, correo: string, codigo: string): Observable<string> {
  const body = { correo, codigo };
  return this.http.post(`${API_BASE_URL}/${endpoint}`, body, {
    responseType: 'text'
  }) as Observable<string>;
}
}
