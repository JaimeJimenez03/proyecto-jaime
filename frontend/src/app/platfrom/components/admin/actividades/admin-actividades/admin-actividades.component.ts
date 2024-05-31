import { Actividad } from './../../../../models/actividad';
import { Usuario } from '../../../../models/usuario';
import { Component } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { DetalleActividadComponent } from '../detalle-actividad/detalle-actividad.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem, TranslationKeys } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { fadeInOutAnimation, slideInOutAnimation, slideInOutAnimationForm } from '../../../animations';


@Component({
  selector: 'app-admin-actividades',
  standalone: true,
  imports: [TableModule, FormsModule, ButtonModule, RatingModule, DatePipe, DetalleActividadComponent, TabMenuModule, InputTextareaModule, MatTabsModule, MatIconModule],
  templateUrl: './admin-actividades.component.html',
  styleUrl: './admin-actividades.component.css',
  animations: [fadeInOutAnimation, slideInOutAnimation, slideInOutAnimationForm]
})
export class AdminActividadesComponent {

  items: MenuItem[] | undefined;

  usuarioLogueado: any;

  public listaActividades: Actividad[] = [];
  public listaUsuariosByActividad: Usuario[] = []


  public actividad!: Actividad;
  public actividadAdd: any = {
    trasporte: false,
    material: false,
    personal: false
  };


  parametros: { [key: string]: any } = {};

  public mostrado: boolean = false;
  public tipoInput: string = 'password';


  //Booleanos

  public m_formulario_actividadAdd: boolean = false;
  public modalDetalleOpen: boolean = false;

  public generalForm: boolean = false;
  public fechaForm: boolean = false;

  public modalOpen: boolean = false;
  public showModalConfirm: boolean = false;


  constructor(private adminService: AdminService) {

    this.parametros["ofertante"] = 'Ofertante';
    this.parametros["consumidor"] = 'Consumidor';
    this.parametros["administrador"] = 'Administrador';
  }




  ngOnInit() {
    this.usuarioLogueado = JSON.parse(sessionStorage.getItem('userLogin')!);

    this.getAllActivities();
    this.items = [
      {
        label: 'Datos Generales', icon: 'pi pi-cog',
        command: () => this.abrirGeneral(),
      },
      {
        label: 'Fechas', icon: 'pi pi-calendar-clock',
        command: () => this.abrirFecha(),
      },
    ];
  }

  abrirGeneral() {
    this.fechaForm = false;
    this.generalForm = true;
  }

  abrirFecha() {
    this.generalForm = false;
    this.fechaForm = true;

  }


  onSubmitAdd(formData: any) {
    this.adminService.getUserById(this.usuarioLogueado.id).subscribe(
      resp => {
        formData.id_usuario_creador = resp;
        formData.hora_inicio = this.formatTime(formData.hora_inicio);
        formData.hora_fin = this.formatTime(formData.hora_fin);
        formData.duracion_aprox = this.formatTime(formData.duracion_aprox);

        this.adminService.insertarActividad(formData).subscribe(
          resp => {
            this.listaActividades = resp;
            this.cerrarFormAdd();
          }
        )
      }
    )
  }

  formatTime(timeString: string): string {
    return timeString;
  }

  getAllActivities() {
    this.adminService.getAllActivities().subscribe(
      resp => {
        this.listaActividades = resp;
      },

      error => {
        console.error('Error al obtener actividades:', error);
      }
    )
  }

  obtenerDatosActividades(id: number) {
    this.adminService.getActivitieById(id).subscribe(
      resp => {
        this.actividad = resp;
        this.obtenerUsuariosActividad(resp.id);

      },
      error => {
        console.error('Error al obtener actividad:', error);
      }
    )

  }

  obtenerUsuariosActividad(id: number) {
    this.adminService.getUserByActividades(id).subscribe(
      resp => {
        this.listaUsuariosByActividad = resp;
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    )

    this.mostrarDatosActividades();
  }

  abrirModalConfirm(actividad: Actividad) {
    this.showModalConfirm = true;
    this.actividad = actividad;

  }

  cerrarModalConfirm() {
    this.showModalConfirm = false;
  }



  eliminarActividad(id: number) {
    this.adminService.deleteActvidad(id).subscribe(
      resp => {
        this.listaActividades = resp;
        this.cerrarModalConfirm();
      }
    )
  }

  getUsuarioCreador() {
    this.adminService.getUserById
  }

  mostrarDatosActividades() {
    this.modalDetalleOpen = (!this.modalDetalleOpen)
  }



  abrirFormAdd() {
    this.m_formulario_actividadAdd = true;
  }

  cerrarFormAdd() {
    this.actividadAdd = {}
    this.m_formulario_actividadAdd = false;
    this.generalForm = false;
    this.fechaForm = false;
  }

  cerrarModalDetalle() {
    this.modalDetalleOpen = false;

    this.getAllActivities();
  }



}
