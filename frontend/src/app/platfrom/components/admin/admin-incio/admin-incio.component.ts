import { AuthService } from './../../../services/auth.service';
import { LoginService } from './../../../services/login.service';
import { Component, NgModule, makeStateKey } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AdminUsuariosComponent } from '../usuarios/admin-usuarios/admin-usuarios.component';
import { AdminActividadesComponent } from '../actividades/admin-actividades/admin-actividades.component';
import { AdminSolicitudesComponent } from '../solicitudes/admin-solicitudes/admin-solicitudes.component';
import { AdminRolesComponent } from '../roles/admin-roles/admin-roles.component';
import { fadeInOutAnimation } from '../../animations';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-admin-incio',
  standalone: true,
  imports: [RouterLink, MenubarModule, AdminUsuariosComponent, AdminActividadesComponent, AdminSolicitudesComponent, AdminRolesComponent],
  templateUrl: './admin-incio.component.html',
  styleUrl: './admin-incio.component.css',
  animations: [fadeInOutAnimation]
})
export class AdminIncioComponent {

  public menuOptions: MenuItem[] = [];

  public usuarioLogueado: any;

  public m_tablaUsuarios: boolean = false;
  public m_tablaActividades: boolean = false;
  public m_tablaSolicitudes: boolean = false;
  public m_tablaRoles: boolean = false;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuarioLogueado = JSON.parse(sessionStorage.getItem('userLogin')!);

    this.menuOptions = [
      {
        label: 'Volver al Inicio',
        icon: 'pi pi-home',
        command: () => inicio(),

      },
      {
        label: 'Usuarios',
        icon: 'pi pi-users',
        command: () => tableUsers(),

      },
      {
        label: 'Actividades',
        icon: 'pi pi-objects-column',
        command: () => tableActividades()
      },
      {
        label: 'Solicitudes',
        icon: 'pi pi-list',
        command: () => tableSolicitudes()
      },
      {
        label: 'Roles',
        icon: 'pi pi-slack',
        command: () => tableRoles()
      },
      {
        label: 'Log Out',
        icon: 'pi pi-sign-out',
        command: () => this.logout()
      }
    ]

    const inicio = () => {
      this.router.navigate(["/"])
    }

    const tableUsers = () => {

      if (this.m_tablaSolicitudes) {
        this.m_tablaSolicitudes = false
      }

      if (this.m_tablaActividades) {
        this.m_tablaActividades = false
      }

      if (this.m_tablaRoles) {
        this.m_tablaRoles = false
      }

      this.m_tablaUsuarios = (!this.m_tablaUsuarios);

    }

    const tableActividades = () => {


      if (this.m_tablaUsuarios) {
        this.m_tablaUsuarios = false
      }

      if (this.m_tablaSolicitudes) {
        this.m_tablaSolicitudes = false
      }

      if (this.m_tablaRoles) {
        this.m_tablaRoles = false
      }

      this.m_tablaActividades = (!this.m_tablaActividades);
    }

    const tableSolicitudes = () => {

      if (this.m_tablaUsuarios) {
        this.m_tablaUsuarios = false
      }

      if (this.m_tablaActividades) {
        this.m_tablaActividades = false
      }

      if (this.m_tablaRoles) {
        this.m_tablaRoles = false
      }

      this.m_tablaSolicitudes = (!this.m_tablaSolicitudes);
    }


    const tableRoles = () => {


      if (this.m_tablaUsuarios) {
        this.m_tablaUsuarios = false
      }

      if (this.m_tablaActividades) {
        this.m_tablaActividades = false
      }

      if (this.m_tablaSolicitudes) {
        this.m_tablaSolicitudes = false
      }

      this.m_tablaRoles = (!this.m_tablaRoles);
    }

  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"])
  }

  dondeVaMaquina() {
    this.router.navigate(["/login"])
  }

}
