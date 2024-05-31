import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SolicitudActividad } from '../../../../models/solicitud-actividad';
import { fadeInOutAnimation } from '../../../animations';
import { SolicitudService } from '../../../../services/solicitud.service';

@Component({
  selector: 'app-edit-solicitud',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-solicitud.component.html',
  styleUrl: './edit-solicitud.component.css',
  animations: [fadeInOutAnimation]
})
export class EditSolicitudComponent {

  @Input() solicitud!: SolicitudActividad;

  @Output() cerrarEdit = new EventEmitter<void>();

  constructor(private solicitudService: SolicitudService) {

  }

  onSubmit(solicitud: SolicitudActividad) {

    this.solicitudService.updateSolicitud(solicitud.id, solicitud).subscribe(
      resp => {
        solicitud = resp;
        this.cerrarForm();
      }
    )
  }

  cerrarForm() {
    this.cerrarEdit.emit();
  }
}
