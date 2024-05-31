import { Usuario } from './../models/usuario';
import { Actividad } from './../models/actividad';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  private baseUrl: string = environment.API_URL;


  constructor(private http: HttpClient) { }

  private getToken(): string | null {
    return sessionStorage.getItem('token');
  }


  // LISTADO //

  getAllActivities() {
    return this.http.get<Actividad[]>(this.baseUrl + "/api/activities");
  }

  // OBTENER ACTIVIDAD POR ID //

  getActivitieById(id: number) {
    const url = `${this.baseUrl}/api/activities/activitie/${id}`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.get<Actividad>(url, { headers: header });
  }

  // OBTENER LA LISTA DE USUARIOS EN CADA ACTIVIDAD //

  getUserByActividades(id: number) {
    const url = `${this.baseUrl}/api/activities/activitie/usuarios/${id}`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.get<Usuario[]>(url, { headers: header });
  }

  //INSERTAR ACTIVIDAD //

  insertarActividad(actividad: Actividad) {
    let nRandom: number = Math.floor(Math.random() * 29) + 1;
    actividad.imagen = `assets/act/imagenAct_${nRandom}.jpg`;
    const url = `${this.baseUrl}/api/activities/activitie/add`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.post<Actividad[]>(url, actividad, { headers: header });
  }

  // INSERTAR USUARIO EN LA ACTIVIDAD //

  insertarUsuarioActividad(usuario: Usuario, actividad: Actividad) {

    let usuario_Actividad = {
      usuario: usuario,
      actividad: actividad
    }

    const url = `${this.baseUrl}/api/usuario_actividad/relacion/add/`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.post<any>(url, usuario_Actividad, { headers: header });
  }

  // EDITAR ACTIVIDAD //

  updateActividad(id: number, actividad: Actividad) {
    const url = `${this.baseUrl}/api/activities/activitie/edit/${id}`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.put<Actividad>(url, actividad, { headers: header });
  }

  // ELIMINAR ACTIVIDAD //

  deleteActvidad(id: number) {
    const url = `${this.baseUrl}/api/activities/activitie/delete/${id}`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.delete<Actividad[]>(url, { headers: header });
  }

  deleteRelacionUsuarioActividad(id: number, idActividad: number) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    const url = `${this.baseUrl}/api/usuario_actividad/relacion/remove/${idActividad}`;
    return this.http.post<any>(url, id, { headers: header });
  }

  // OTRAS APIs //


  puntuarActividad(idActividad: number, puntuacion: number, idUsuario: number) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    const url = `${this.baseUrl}/api/activities/activitiy/puntuar/${idActividad}/${idUsuario}`;
    return this.http.put<Actividad[]>(url, puntuacion, { headers: header });
  }


}





