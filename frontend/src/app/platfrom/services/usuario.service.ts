import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Usuario } from '../models/usuario';
import { SolicitudActividad } from '../models/solicitud-actividad';
import { Actividad } from '../models/actividad';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  private getToken(): string | null {
    return sessionStorage.getItem('token');
  }



  // API DE LISTAS // 

  getAllUsers() {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get<Usuario[]>(this.baseUrl + "/api/users", { headers: header });
  }


  // OBTERNER OBJETOS POR IDs // 


  getUserById(id: number) {

    const url = `${this.baseUrl}/api/users/user/${id}`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.get<Usuario>(url, { headers: header });
  }



  // INSERTS //

  insertarUsuario(user: Usuario) {
    const url = `${this.baseUrl}/api/users/user/add`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.post<Usuario[]>(url, user, { headers: header });
  }


  // UPDATES //

  updateUser(id: number, usuario: Usuario) {
    const url = `${this.baseUrl}/api/users/user/edit/${id}`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.put<Usuario>(url, usuario, { headers: header });
  }

  updateUserProfile(id: number, usuario: Usuario) {
    const url = `${this.baseUrl}/api/users/user/editAll/${id}`;
    return this.http.put<any>(url, usuario);
  }

  // DELETES // 

  deleteUsuario(id: number) {
    const url = `${this.baseUrl}/api/users/user/delete/${id}`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.delete<Usuario[]>(url, { headers: header });
  }



  // OTRAS APIS //

  getSolicitudesByUser(id: number) {
    const url = `${this.baseUrl}/api/users/user/solicitudes/${id}`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.get<SolicitudActividad[]>(url, { headers: header });
  }

  getActividadesByUser(id: number) {
    const url = `${this.baseUrl}/api/users/user/actividades/${id}`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.get<Actividad[]>(url, { headers: header });
  }


  getUserByActividades(id: number) {
    const url = `${this.baseUrl}/api/activities/activitie/usuarios/${id}`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.get<Usuario[]>(url, { headers: header });
  }

  getUsersByRoles(id: number) {
    const url = `${this.baseUrl}/api/roles/n_usuarios/${id}`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.get<Usuario[]>(url, { headers: header });
  }

  getActividadesByUserCreador(id: number) {
    const url = `${this.baseUrl}/api/users/user/activities/${id}`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.get<Actividad[]>(url, { headers: header });
  }
}
