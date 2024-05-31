import { Component } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Router, RouterLink } from '@angular/router';
import { CabeceraComponent } from '../../../templates/cabecera/cabecera.component';
import { DetalleActividadComponent } from '../../../actividades/detalle-actividad/detalle-actividad.component';
import { fadeInOutAnimation } from '../../../animations';
import { Actividad } from '../../../../models/actividad';
import { UsuarioService } from '../../../../services/usuario.service';


@Component({
  selector: 'app-lista-act',
  standalone: true,
  imports: [RouterLink, FormsModule, RatingModule, NgClass, CommonModule, BreadcrumbModule, CabeceraComponent, NgIf, DetalleActividadComponent],
  templateUrl: './lista-act.component.html',
  styleUrl: './lista-act.component.css',
  animations: [fadeInOutAnimation]
})
export class ListaActComponent {

  usuarioLogueado: any;

  actividad!: Actividad;

  accesoActividad: Boolean = false;
  vistaPre: Boolean = false;

  listaActividades: Actividad[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.usuarioLogueado = JSON.parse(sessionStorage.getItem('userLogin')!);
    this.usuarioService.getActividadesByUser(this.usuarioLogueado.id).subscribe(
      resp => {
        this.listaActividades = resp;
      }
    )
  }

  abrirDetalle(actividad: Actividad) {
    this.actividad = actividad;
    this.accesoActividad = true;

    this.vistaPre = true;
  }

  cerrarDetalle() {
    this.accesoActividad = false;
  }

  actualizarActividades(actividades: any[]): void {
    this.listaActividades = actividades;
    this.accesoActividad = false;
  }

  redireccion() {
    this.router.navigate(["/login"])
  }

}
