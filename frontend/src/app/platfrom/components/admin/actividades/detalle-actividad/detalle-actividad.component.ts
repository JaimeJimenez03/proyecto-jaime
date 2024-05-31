import { Usuario } from './../../../../models/usuario';
import { Actividad } from './../../../../models/actividad';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ScrollerModule } from 'primeng/scroller';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem, TranslationKeys } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MatTabsModule } from '@angular/material/tabs';
import { fadeInOutAnimation, slideInOutAnimation, slideInOutAnimationForm } from '../../../animations';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-detalle-actividad',
  standalone: true,
  imports: [DatePipe, ButtonModule, RatingModule, FormsModule, ScrollerModule, TableModule, TabMenuModule],
  templateUrl: './detalle-actividad.component.html',
  styleUrl: './detalle-actividad.component.css',
  animations: [fadeInOutAnimation, slideInOutAnimationForm]
})
export class DetalleActividadComponent {

  @Input() actividad!: Actividad;

  actividadCopy: any = "";

  @Input() listaUsuarios!: Usuario[];

  @Input() modalOpen: Boolean = false;

  @Output() cerrarModal = new EventEmitter<void>();

  public usuario!: Usuario;
  public showModal = false;
  items: MenuItem[] | undefined;

  public m_formulario_actividadEdit: boolean = false;
  public generalForm: boolean = false;
  public fechaForm: boolean = false;

  parametros: { [key: string]: any } = {};

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.actividadCopy = this.actividad;

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


  onSubmitEdit(formData: any) {
    this.adminService.updateActividad(formData.id, formData).subscribe(
      resp => {
        this.actividad = resp;
        this.cerrarFormEdit();
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

  abrirFormEdit() {
    this.m_formulario_actividadEdit = true;
  }

  cerrarFormEdit() {

    this.generalForm = false;
    this.fechaForm = false;
    this.m_formulario_actividadEdit = false;

    this.cerrarModalEvento();
  }


  formatTime(timeString: string): string {
    return timeString;
  }


  cerrarModalEvento() {
    this.cerrarModal.emit();
  }


  abrirModal(usuario: Usuario) {
    this.showModal = true;
    this.usuario = usuario;

  }

  cerrarModalConfirm() {
    this.showModal = false;
  }


  eliminarUsuario(usuario: Usuario) {
    this.showModal = false;

    this.adminService.deleteRelacionUsuarioActividad(usuario.id, this.actividad.id).subscribe(
      resp => {
        this.listaUsuarios = resp.listaUsuarios;
        this.cerrarModalConfirm();
      }
    )
  }

}
