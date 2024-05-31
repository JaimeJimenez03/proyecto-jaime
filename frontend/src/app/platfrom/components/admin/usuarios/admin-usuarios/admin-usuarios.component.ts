import { Role } from '../../../../models/role';
import { SolicitudActividad } from '../../../../models/solicitud-actividad';
import { Usuario } from '../../../../models/usuario';
import { AdminService } from '../../../../services/admin.service';
import { Component, NgModule, Pipe, resolveForwardRef } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RouterLink } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { fadeInOutAnimation } from '../../../animations';

@Component({
  selector: 'app-admin-usuarios',
  standalone: true,
  imports: [TableModule, ButtonModule, SidebarModule, RouterLink, DialogModule, DatePipe, DecimalPipe, FormsModule, UpperCasePipe],
  templateUrl: './admin-usuarios.component.html',
  styleUrl: './admin-usuarios.component.css',
  animations: [fadeInOutAnimation]
})

export class AdminUsuariosComponent {

  public listaUsuarios: Usuario[] = [];

  public listaRoles: Role[] = []

  public listaSolicitudesPorUsuarios: SolicitudActividad[] = [];

  public usuario: Usuario = {} as Usuario;

  public nombreEditable: any = '';
  public nombreEditableAnt: any = '';

  public formData: any = {};

  public mostrado: boolean = false;
  public tipoInput: string = 'password';


  // BOOLEANOS //

  public m_formulario_usuarioAdd: boolean = false
  public m_formulario_usuarioEdit: boolean = false
  public modalOpen: boolean = false;
  public showModalConfirm: boolean = false;



  constructor(private adminService: AdminService) {

  }


  ngOnInit() {
    this.getAllUsers();
    this.getAllRoles();

  }

  onSubmit(formData: any) {

    this.adminService.insertarUsuario(formData).subscribe(
      resp => {
        this.listaUsuarios = resp;
        this.mostrarFormularioUsuarioAdd();
        formData = {};
      },
      error => {
        console.error('Error al insertar usuario:', error);
      }
    )
  }

  onSubmitEdit(usuario: any) {
    this.adminService.updateUser(usuario.id, usuario).subscribe(
      resp => {
        this.usuario = resp;
        this.mostrarFormularioEdit();
      },
      error => {
        console.error('Error al actualizar usuario:', error);
      }
    )
  }


  getAllUsers() {
    this.adminService.getAllUsers().subscribe(

      resp => {
        this.listaUsuarios = resp;
      },

      error => {
        console.error('Error al obtener usuarios:', error);
      }
    )
  }

  getAllRoles() {
    this.adminService.getAllRoles().subscribe(

      resp => {
        this.listaRoles = resp;
      },

      error => {
        console.error('Error al obtener roles:', error);
      }
    )
  }

  deleteUsuario(id: number) {
    this.adminService.deleteUsuario(id).subscribe(
      resp => {
        this.listaUsuarios = resp;
      }
    )
  }




  //funciones

  mostrarFormularioUsuarioAdd = () => {
    this.m_formulario_usuarioAdd = (!this.m_formulario_usuarioAdd);
  }

  mostrarFormularioEdit() {
    this.nombreEditable = this.usuario.username;
    this.nombreEditableAnt = this.usuario.username
    this.m_formulario_usuarioEdit = (!this.m_formulario_usuarioEdit);
  }

  cerrarFormEdit() {
    this.usuario.username = this.nombreEditableAnt;
    this.mostrarFormularioEdit()
  }

  mostrarDatosUsuario = () => {
    this.modalOpen = (!this.modalOpen)
  }

  abrirModal(usuario: any) {
    this.modalOpen = true;
    this.usuario = usuario;
    this.obtenerSolUsuarios(usuario.id);
  }

  cerrarModal() {
    this.modalOpen = false;
    this.formData = {}
  }

  toggleContrasena() {
    this.mostrado = !this.mostrado;
    this.tipoInput = this.mostrado ? 'text' : 'password';
  }


  obtenerSolUsuarios(id: number) {
    this.adminService.getSolicitudesByUser(id).subscribe(
      resp => {
        this.listaSolicitudesPorUsuarios = resp;
      }
    )
  }


  guardarCambios() {
    this.nombreEditable = this.usuario.username;
  }

  cancelarEdicion() {
    this.usuario.username = this.nombreEditable;
  }

  abrirModalConfirm(usuario: Usuario) {
    this.showModalConfirm = true;
    this.usuario = usuario;

  }

  cerrarModalConfirm() {
    this.showModalConfirm = false;
  }


  eliminarUser(id: number) {
    this.adminService.deleteUsuario(id).subscribe(
      resp => {
        this.listaUsuarios = resp;
        this.cerrarModalConfirm();
      }
    )
  }

}

