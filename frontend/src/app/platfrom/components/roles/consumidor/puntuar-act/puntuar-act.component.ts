import { ActividadService } from './../../../../services/actividad.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { fadeInOutAnimation } from '../../../animations';
import { TableModule } from 'primeng/table';
import { Actividad } from '../../../../models/actividad';
import { UsuarioService } from '../../../../services/usuario.service';
import { RatingModule } from 'primeng/rating';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-puntuar-act',
  standalone: true,
  imports: [TableModule, RatingModule, FormsModule],
  templateUrl: './puntuar-act.component.html',
  styleUrl: './puntuar-act.component.css',
  animations: [fadeInOutAnimation]
})
export class PuntuarActComponent {

  usuarioLogueado: any;
  listaActividades: Actividad[] = [];

  @Output() cerrarPuntuar = new EventEmitter<void>();



  constructor(private usuarioService: UsuarioService, private actividadService: ActividadService) { }

  ngOnInit() {
    this.usuarioLogueado = JSON.parse(sessionStorage.getItem('userLogin')!);

    this.usuarioService.getActividadesByUser(this.usuarioLogueado.id).subscribe(
      resp => {
        this.listaActividades = resp;
      }
    )
  }

  onSubmit(idActividad: number, puntuacion: number) {

    this.actividadService.puntuarActividad(idActividad, puntuacion, this.usuarioLogueado.id).subscribe(
      resp => {
        this.listaActividades = resp;
      }
    )

  }

  cerrar() {
    this.cerrarPuntuar.emit();
  }

}
