import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SolicitudActividad } from '../models/solicitud-actividad';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  private getToken(): string | null {
    return sessionStorage.getItem('token');
  }


  // OBTENER TODAS LAS SOLICITUDES //

  getAllSolicitudes() {
    const url = `${this.baseUrl}/api/solicitudes`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get<SolicitudActividad[]>(url, { headers: header });
  }

  // INSERTAR //

  insertSolicitud(solicitud: SolicitudActividad) {
    const url = `${this.baseUrl}/api/solicitudes/solicitud/add`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.post<SolicitudActividad[]>(url, solicitud, { headers: header });
  }


  // UPDATEAR //

  updateSolicitud(id: number, solicitud: SolicitudActividad) {
    const url = `${this.baseUrl}/api/solicitudes/solicitud/edit/${id}`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.put<SolicitudActividad>(url, solicitud, { headers: header });
  }

  //ELIMINAR //

  deleteSolicitud(id: number) {
    const url = `${this.baseUrl}/api/solicitudes/solicitud/remove/${id}`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.delete<SolicitudActividad[]>(url, { headers: header });
  }

  // OTRAS APIS //

  getSolicitudesByUser(id: number) {
    const url = `${this.baseUrl}/api/users/user/solicitudes/${id}`;
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);

    return this.http.get<SolicitudActividad[]>(url, { headers: header });
  }
}
