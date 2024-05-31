import { ActividadService } from './../../services/actividad.service';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';
import { Actividad } from '../../models/actividad';
import { Component } from '@angular/core';
import { fadeInOutAnimation, slideInOutAnimationForm } from '../animations';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CabeceraComponent } from '../templates/cabecera/cabecera.component';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { RatingModule } from 'primeng/rating';
import { CrearSolicitudComponent } from '../roles/consumidor/crear-solicitud/crear-solicitud.component';




@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, BreadcrumbModule, CarouselModule, ButtonModule, CabeceraComponent, CrearSolicitudComponent, RouterLink, MatTabsModule, MatIconModule, TabMenuModule, RatingModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  animations: [fadeInOutAnimation, slideInOutAnimationForm]
})
export class InicioComponent {

  itemsMenu: MenuItem[] | undefined;

  items: Array<any> = [];
  home: any;

  listaActividades: Actividad[] = [];

  usuarioLogueado: any;

  crearSolicitud: Boolean = false;

  m_formulario_actividadAdd: Boolean = false;

  public actividadAdd: any = {
    trasporte: false,
    material: false,
    personal: false
  };
  public generalForm: boolean = false;
  public fechaForm: boolean = false;






  constructor(private actividadService: ActividadService, private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.usuarioLogueado = JSON.parse(sessionStorage.getItem('userLogin')!);

    this.itemsMenu = [
      {
        label: 'Datos Generales',
        command: () => this.abrirGeneral(),
      },
      {
        label: 'Fechas',
        command: () => this.abrirFecha(),
      },
    ];
    this.actividadService.getAllActivities().subscribe(
      resp => {
        this.listaActividades = resp;
      }
    )
  }

  onSubmitAdd(formData: any) {
    this.usuarioService.getUserById(this.usuarioLogueado.id).subscribe(
      resp => {
        formData.id_usuario_creador = resp;

        this.actividadService.insertarActividad(formData).subscribe(
          resp => {
            this.listaActividades = resp;
            this.cerrarFormAdd();
          }
        )
      }
    )
  }

  abrirGeneral() {
    this.fechaForm = false;
    this.generalForm = true;
  }

  abrirFecha() {
    this.generalForm = false;
    this.fechaForm = true;

  }

  mostrarFormulario() {
    this.m_formulario_actividadAdd = true;
  }

  cerrarFormAdd() {
    this.actividadAdd = {}
    this.m_formulario_actividadAdd = false;
    this.generalForm = false;
    this.fechaForm = false;
  }

  abrirCerrarPanelCrearSolicitud() {
    this.crearSolicitud = !this.crearSolicitud;
  }



}
