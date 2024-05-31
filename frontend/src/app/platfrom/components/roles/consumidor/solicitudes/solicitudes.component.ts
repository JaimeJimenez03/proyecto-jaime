import { EditSolicitudComponent } from './../edit-solicitud/edit-solicitud.component';
import { ButtonModule } from 'primeng/button';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { NgFor } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { fadeInOutAnimation } from '../../../animations';
import { CabeceraComponent } from '../../../templates/cabecera/cabecera.component';
import { SolicitudActividad } from '../../../../models/solicitud-actividad';
import { SolicitudService } from '../../../../services/solicitud.service';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [NgFor, ButtonModule, TableModule, CabeceraComponent, FormsModule, EditSolicitudComponent, RouterLink],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css',
  animations: [fadeInOutAnimation]
})
export class SolicitudesComponent {

  usuarioLogueado: any;

  listaSolicitudes: SolicitudActividad[] = [];

  abrirEditSoli: Boolean = false;
  solicitud!: SolicitudActividad;

  public showModalConfirm: boolean = false;


  constructor(private solicitudService: SolicitudService, private router: Router) {

  }


  ngOnInit(): void {
    this.usuarioLogueado = JSON.parse(sessionStorage.getItem('userLogin')!)
    this.solicitudService.getSolicitudesByUser(this.usuarioLogueado.id).subscribe(
      resp => {
        this.listaSolicitudes = resp;
      }
    )
  }


  abrirEdit(objeto: SolicitudActividad) {
    this.solicitud = objeto;

    this.abrirEditSoli = true;
  }

  cerrarEdit() {
    this.abrirEditSoli = false;
    this.solicitudService.getSolicitudesByUser(this.usuarioLogueado.id).subscribe(
      resp => {
        this.listaSolicitudes = resp;
      }
    )
  }


  abrirModalConfirm(solicitud: SolicitudActividad) {
    this.showModalConfirm = true;
    this.solicitud = solicitud;

  }

  cerrarModalConfirm() {
    this.showModalConfirm = false;
  }


  eliminarSolicitud(id: number) {
    this.solicitudService.deleteSolicitud(id).subscribe(
      resp => {
        this.solicitudService.getSolicitudesByUser(this.usuarioLogueado.id).subscribe(
          resp => {
            this.listaSolicitudes = resp
            this.cerrarModalConfirm();
          }

        )
      }
    )
  }

  redireccion() {
    this.router.navigate(["/login"]);
  }

}
