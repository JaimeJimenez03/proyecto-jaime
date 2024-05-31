import { AdminService } from './../../../../services/admin.service';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonModule } from '@angular/common';
import { SolicitudActividad } from '../../../../models/solicitud-actividad';
import { fadeInOutAnimation } from '../../../animations';

@Component({
  selector: 'app-admin-solicitudes',
  standalone: true,
  imports: [TableModule, ButtonModule, ConfirmDialogModule],
  templateUrl: './admin-solicitudes.component.html',
  styleUrl: './admin-solicitudes.component.css',
  providers: [CommonModule],
  animations: [fadeInOutAnimation]
})
export class AdminSolicitudesComponent {

  public listaSolicitudes: SolicitudActividad[] = [];

  public solicitud!: SolicitudActividad;


  //Modal Confirm
  public showModal = false;


  public confirmDelete: boolean = false;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getAllSolicitudes();
  }

  abrirModal(solicitud: any) {
    console.log(solicitud.id);
    this.showModal = true;
    this.solicitud = solicitud;
  }

  cerrarModal() {
    this.showModal = false;
  }


  getAllSolicitudes() {
    this.adminService.getAllSolicitudes().subscribe(
      resp => {
        this.listaSolicitudes = resp;
      },

      error => {
        console.error('Error al obtener lista de roles:', error);
      }
    )
  }

  eliminarSolicitud(id: number) {
    console.log("idSolicitud", id)
    this.showModal = false;

    this.adminService.deleteSolicitud(id).subscribe(
      resp => {
        this.listaSolicitudes = resp;
      },

      error => {
        console.error('Error al obtener lista de solicitudes:', error);
      }
    )

  }

}


