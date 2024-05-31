import { Actividad } from './../../../models/actividad';
import { Component } from '@angular/core';
import { ActividadService } from '../../../services/actividad.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CabeceraComponent } from '../../templates/cabecera/cabecera.component';
import { fadeInOutAnimation } from '../../animations';
import { DetalleActividadComponent } from '../detalle-actividad/detalle-actividad.component';
import { routes } from '../../../../app.routes';



@Component({
  selector: 'app-listado-actividades',
  standalone: true,
  imports: [RouterLink, FormsModule, RatingModule, NgClass, CommonModule, BreadcrumbModule, CabeceraComponent, NgIf, DetalleActividadComponent],
  templateUrl: './listado-actividades.component.html',
  styleUrl: './listado-actividades.component.css',
  animations: [fadeInOutAnimation]
})
export class ListadoActividadesComponent {

  usuarioLogueado: any;

  items: Array<any> = [];
  home: any;
  actividades: any;

  accesoActividad: boolean = false;

  actividad!: Actividad;


  listaActividades: Actividad[] = [];

  public imagenRandom: any;

  mostrarAlerta: Boolean = false;

  constructor(private actividadService: ActividadService, private router: Router) { }


  ngOnInit() {

    this.usuarioLogueado = JSON.parse(sessionStorage.getItem('userLogin')!);

    this.home = { icon: 'pi pi-home' };
    this.home = { routerLink: "/inicio" };

    this.actividades = { icon: 'pi pi-th-large' };
    this.actividades = { routerLink: '/actividades' };

    this.items.push(this.home);
    this.items.push(this.actividades);



    this.actividadService.getAllActivities().subscribe(
      resp => {
        this.listaActividades = resp;

      }
    )
  }

  abrirDetalle(actividad: Actividad) {
    this.actividad = actividad;
    this.accesoActividad = true;
  }

  cerrarDetalle() {
    this.mostrarAlerta = true;
    this.accesoActividad = false;

    setTimeout(() => {
      this.mostrarAlerta = false;
    }, 5000);
  }

  cerrarDetalleSin() {
    this.accesoActividad = false;
  }

  actividadAct(actividad: any) {
    this.actividadService.getAllActivities().subscribe(
      resp => {
        this.listaActividades = resp;
      }
    )
  }


  redireccion() {
    this.router.navigate(["/login"])
  }
}