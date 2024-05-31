import { AuthService } from './../../../services/auth.service';
import { Usuario } from './../../../models/usuario';
import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { slideInOutAnimation } from '../../animations';
import { Router, RouterLink } from '@angular/router';
import { PerfilComponent } from '../perfil/perfil.component';
import { PuntuarActComponent } from '../../roles/consumidor/puntuar-act/puntuar-act.component';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [NgClass, RouterLink, PerfilComponent, PuntuarActComponent],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css',
  animations: [slideInOutAnimation]
})
export class MenuLateralComponent {

  usuarioLogueado: any;

  public usuario!: Usuario;


  mostrarPerfil: Boolean = false;

  puntuarAct: Boolean = false;


  @Input() menuOpen: Boolean = false;

  @Output() cerrarMenu = new EventEmitter<void>();

  constructor(private authService: AuthService, private usuarioService: UsuarioService) {

  }

  ngOnInit() {
    this.usuarioLogueado = JSON.parse(sessionStorage.getItem('userLogin')!);
  }

  perfil() {
    this.puntuarAct = false;
    this.mostrarPerfil = !this.mostrarPerfil;
  }

  cerrarPerfil() {
    this.mostrarPerfil = false;
  }



  closeMenu() {
    this.menuOpen = false;
    this.cerrarMenu.emit();
  }

  logout() {
    this.authService.logout();
  }

  puntuar() {
    this.mostrarPerfil = false;
    this.puntuarAct = !this.puntuarAct
  }

}
