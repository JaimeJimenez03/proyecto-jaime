import { Usuario } from './../models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { SolicitudActividad } from '../models/solicitud-actividad';
import { Role } from '../models/role';
import { Actividad } from '../models/actividad';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  private baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  private getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  // API DE LISTAS // 

  getAllUsers() {

    return this.http.get<Usuario[]>(this.baseUrl + "/api/users",);
  }


  getAllActivities() {
    return this.http.get<Actividad[]>(this.baseUrl + "/api/activities");
  }

  getAllRoles() {
    const url = `${this.baseUrl}/api/roles`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get<Role[]>(url, { headers: header });
  }

  getAllSolicitudes() {
    const url = `${this.baseUrl}/api/solicitudes`;
    return this.http.get<SolicitudActividad[]>(url);
  }


  // OBTERNER OBJETOS POR IDs // 


  getUserById(id: number) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUrl}/api/users/user/${id}`;
    return this.http.get<Usuario>(url, { headers: header });
  }

  getActivitieById(id: number) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUrl}/api/activities/activitie/${id}`;
    return this.http.get<Actividad>(url, { headers: header });
  }

  getRolById(id: number) {
    const url = `${this.baseUrl}/api/roles/rol/${id}`;
    return this.http.get<Role>(url);
  }




  // INSERTS //

  insertarUsuario(user: Usuario) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUrl}/api/users/user/add`;
    return this.http.post<Usuario[]>(url, user, { headers: header });
  }

  insertarActividad(actividad: Actividad) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    let nRandom: number = Math.floor(Math.random() * 29) + 1;
    actividad.imagen = `assets/act/imagenAct_${nRandom}.jpg`;
    const url = `${this.baseUrl}/api/activities/activitie/add`;
    return this.http.post<Actividad[]>(url, actividad, { headers: header });
  }


  // UPDATES //

  updateUser(id: number, usuario: Usuario) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUrl}/api/users/user/edit/${id}`;
    return this.http.put<Usuario>(url, usuario, { headers: header });
  }

  updateActividad(id: number, actividad: Actividad) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUrl}/api/activities/activitie/edit/${id}`;
    return this.http.put<Actividad>(url, actividad, { headers: header });
  }


  // DELETES // 

  deleteSolicitud(id: number) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUrl}/api/solicitudes/solicitud/remove/${id}`;
    return this.http.delete<SolicitudActividad[]>(url, { headers: header });
  }

  deleteActvidad(id: number) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUrl}/api/activities/activitie/delete/${id}`;
    return this.http.delete<Actividad[]>(url, { headers: header });
  }


  deleteRelacionUsuarioActividad(id: number, idActividad: number) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUrl}/api/usuario_actividad/relacion/remove/${idActividad}`;
    return this.http.post<any>(url, id, { headers: header });
  }

  deleteUsuario(id: number) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUrl}/api/users/user/delete/${id}`;
    return this.http.delete<Usuario[]>(url, { headers: header });
  }



  // OTRAS APIS //

  getSolicitudesByUser(id: number) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUrl}/api/users/user/solicitudes/${id}`;
    return this.http.get<SolicitudActividad[]>(url, { headers: header });
  }

  getUserByActividades(id: number) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUrl}/api/activities/activitie/usuarios/${id}`;
    return this.http.get<Usuario[]>(url, { headers: header });
  }

  getUsersByRoles(id: number) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUrl}/api/roles/n_usuarios/${id}`;
    return this.http.get<Usuario[]>(url, { headers: header });
  }





}
