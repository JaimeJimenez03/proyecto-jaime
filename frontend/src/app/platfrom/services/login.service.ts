import { Usuario } from './../models/usuario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { LoginRequest } from '../models/login-request';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  login(user: LoginRequest) {
    const url = `${this.baseUrl}/login`;
    return this.http.post<any>(url, user);
  }

  register(user: Usuario) {
    const url = `${this.baseUrl}/register`;
    return this.http.post<Usuario>(url, user);
  }

  activeUser(username: string) {
    const url = `${this.baseUrl}/activeUser`;
    return this.http.post<String>(url, username);
  }

}