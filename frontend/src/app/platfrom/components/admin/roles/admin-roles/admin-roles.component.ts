import { AdminService } from './../../../../services/admin.service';
import { ConfirmationService } from 'primeng/api';
import { Component } from '@angular/core';
import { Role } from '../../../../models/role';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Usuario } from '../../../../models/usuario';
import { fadeInOutAnimation } from '../../../animations';

@Component({
  selector: 'app-admin-roles',
  standalone: true,
  imports: [TableModule, ButtonModule],
  templateUrl: './admin-roles.component.html',
  styleUrl: './admin-roles.component.css',
  animations: [fadeInOutAnimation]
})
export class AdminRolesComponent {

  public listaRoles: Role[] = [];

  public listaUsuarios: Usuario[] = [];

  public rol!: Role;

  public usuario!: Usuario;



  public openModal: boolean = false;

  numeroUsuariosPorRol: { [key: number]: number } = {};


  constructor(private adminService: AdminService) {

  }

  ngOnInit() {
    this.getAllRoles()

  }

  getAllRoles() {
    this.adminService.getAllRoles().subscribe(
      resp => {
        this.listaRoles = resp;
        this.listaRoles.forEach(rol => {
          this.adminService.getUsersByRoles(rol.id).subscribe(
            resp => {
              this.listaUsuarios = resp;
              this.numeroUsuariosPorRol[rol.id] = resp.length;
            },
            error => {
              console.error('Error al obtener número de usuarios para el rol', rol.id, ':', error);
            }
          );
        });
      },

      error => {
        console.error('Error al obtener lista de roles:', error);
      }
    )
  }

  getRolById(id: number) {
    this.adminService.getRolById(id).subscribe(
      resp => {
        this.rol = resp;

      }
    )

    this.adminService.getUsersByRoles(id).subscribe(
      resp => {
        this.listaUsuarios = resp;
      },
    );
    this.abrirModal();
  }

  abrirModal() {
    this.openModal = true;
  }

  cerrarModal() {
    this.openModal = false;
  }


}
