import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgControl, NgModel } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { fadeInOutAnimation } from '../../../animations';
import { SolicitudActividad } from '../../../../models/solicitud-actividad';
import { SolicitudService } from '../../../../services/solicitud.service';

@Component({
  selector: 'app-crear-solicitud',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './crear-solicitud.component.html',
  styleUrl: './crear-solicitud.component.css',
  animations: [fadeInOutAnimation]
})

export class CrearSolicitudComponent {

  @Output() abrirCerrarPanelCrearSolicitud = new EventEmitter<void>();

  creadaSolicitud: Boolean = false

  solicitudActividad: SolicitudActividad = {
    id: 0,
    nombre: "",
    concepto: "",
    ciudad: "",
    usuario: 0,
  }

  usuarioLogueado: any;

  constructor(private solicitudService: SolicitudService) {

  }


  ngOnInit() {
    this.usuarioLogueado = JSON.parse(sessionStorage.getItem('userLogin')!);
  }

  onSubmit(solicitud: SolicitudActividad) {
    solicitud.usuario = this.usuarioLogueado;
    this.solicitudService.insertSolicitud(solicitud).subscribe(
      resp => {
        this.cerrarEvento();
        this.creadaSolicitud = true
      }
    )
  }

  cerrarEvento() {
    this.abrirCerrarPanelCrearSolicitud.emit();
  }

  cerrarSolicitud() {
    this.creadaSolicitud = false;;
  }
}
