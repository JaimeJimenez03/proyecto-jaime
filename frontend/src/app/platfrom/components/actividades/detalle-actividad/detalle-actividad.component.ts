import { ActividadService } from './../../../services/actividad.service';
import { Actividad } from './../../../models/actividad';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { fadeInOutAnimation, slideInOutAnimationForm } from '../../animations';
import { CabeceraComponent } from '../../templates/cabecera/cabecera.component';
import { CommonModule, DatePipe, NgIf } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { Usuario } from '../../../models/usuario';
import { TableModule } from 'primeng/table';



@Component({
  selector: 'app-detalle-actividad',
  standalone: true,
  imports: [CabeceraComponent, DatePipe, RatingModule, FormsModule, TabMenuModule, TableModule],
  templateUrl: './detalle-actividad.component.html',
  styleUrl: './detalle-actividad.component.css',
  animations: [fadeInOutAnimation, slideInOutAnimationForm]
})
export class DetalleActividadComponent {

  listaActividades: Actividad[] = [];

  listaUsuarios!: Usuario[];

  act!: Actividad;

  actividadEdit!: Actividad;

  @Output() actividad = new EventEmitter<any>();
  @Output() listaActividadesAct = new EventEmitter<any[]>();

  @Output() cerrarDetalleSin = new EventEmitter<void>();

  @Input() actividadCurrent!: Actividad;

  @Input() vistaPre!: Boolean;

  @Output() cerrarDetalle = new EventEmitter<void>();


  mostrarLeyenda: Boolean = false;
  mostrarUsuarios: Boolean = false;

  mostrarAlerta: Boolean = false;

  usuarioLogueado: any;

  usuarioInscrito: Boolean = false;

  duplicado: boolean = false;

  m_formulario_actividadEdit: boolean = false;
  generalForm: boolean = false;
  fechaForm: boolean = false;
  items: MenuItem[] | undefined;

  constructor(private actividadService: ActividadService, private usuarioService: UsuarioService, private route: ActivatedRoute) {

  }


  abrirLeyenda() {
    this.mostrarLeyenda = true;
  }

  abrirUsuarios() {
    this.mostrarUsuarios = true;
  }

  ngOnInit() {
    this.usuarioLogueado = JSON.parse(sessionStorage.getItem('userLogin')!);
    this.actividadEdit = this.actividadCurrent;


    this.actividadService.getUserByActividades(this.actividadCurrent.id).subscribe(
      resp => {
        this.listaUsuarios = resp;
      }
    )

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

  confirmarAct() {
    this.usuarioService.getUserById(this.usuarioLogueado.id).subscribe(
      resp => {
        this.actividadService.insertarUsuarioActividad(resp, this.actividadCurrent).subscribe(
          resp => {
            this.act = resp;
            this.actividad.emit(this.act);

            this.cerrarDetalle.emit();
            this.cerrarModalEvento();
          },
          error => {
            this.usuarioInscrito = true;
            this.duplicado = true;
          }
        )
      }
    )

  }

  abrirEdit() {
    this.m_formulario_actividadEdit = true;
  }

  abrirGeneral() {
    this.fechaForm = false;
    this.generalForm = true;
  }

  abrirFecha() {
    this.generalForm = false;
    this.fechaForm = true;
  }

  abrirFormEdit() {
    this.m_formulario_actividadEdit = true;
    this.actividadEdit = this.actividadCurrent;
  }

  cerrarFormEdit() {
    this.generalForm = false;
    this.fechaForm = false;
    this.m_formulario_actividadEdit = false;

    this.cerrarModalSin()
  }

  onSubmitEdit(formData: any) {
    this.actividadService.updateActividad(formData.id, formData).subscribe(
      resp => {
        this.actividadCurrent = resp;
        this.cerrarFormEdit();
      }
    )
  }

  cancelarAct() {
    this.actividadService.deleteRelacionUsuarioActividad(this.usuarioLogueado.id, this.actividadCurrent.id).subscribe(
      resp => {
        this.listaActividades = resp.listaActividades
        this.listaActividadesAct.emit(this.listaActividades);
      },
    )

  }

  eliminarAct() {
    this.actividadService.deleteActvidad(this.actividadCurrent.id).subscribe(
      resp => {
        this.listaActividades = resp
        this.listaActividadesAct.emit(this.listaActividades);

        this.cerrarModalSin()
        this.cerrarModalEvento()
      }
    )
  }

  cerrarModalEvento() {
    this.cerrarDetalle.emit();
  }

  cerrarModalSin() {
    this.cerrarDetalleSin.emit();

  }


}
