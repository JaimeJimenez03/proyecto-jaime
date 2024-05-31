import { DatePipe } from '@angular/common';
import { Usuario } from './../../../models/usuario';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { fadeInOutAnimation } from '../../animations';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CabeceraComponent, FormsModule],
  providers: [DatePipe],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
  animations: [fadeInOutAnimation,
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
  ]
})
export class PerfilComponent {

  usuarioLogueado: any;
  mostrarAlerta: Boolean = false;

  @Output() cerrarPerfil = new EventEmitter<void>();

  usuario!: Usuario;

  public m_formulario_usuarioEdit: boolean = false
  public mostrado: boolean = false;
  public tipoInput: string = 'password';
  contrasenna: string = "";

  contador: number = 5;

  constructor(private usuarioService: UsuarioService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit() {
    this.usuarioLogueado = JSON.parse(sessionStorage.getItem('userLogin')!);

    this.usuarioService.getUserById(this.usuarioLogueado.id).subscribe(
      resp => {
        this.usuario = resp;
      }
    )
  }

  onSubmitEdit(usuario: any) {
    usuario.password = this.contrasenna;
    this.usuarioService.updateUserProfile(usuario.id, usuario).subscribe(
      resp => {
        this.usuario = resp.usuario
        sessionStorage.setItem('userLogin', JSON.stringify(resp.usuarioLogin));
        this.mostrarFormularioEdit();
      },
      error => {
        console.error('Error al actualizar usuario:', error);
      }
    )
  }

  mostrarFormularioEdit() {
    this.m_formulario_usuarioEdit = (!this.m_formulario_usuarioEdit);
  }

  eliminarCuenta() {
    let men = '¿Está seguro de querer eliminar su cuenta?'
    if (confirm(men)) {
      this.mostrarAlerta = true;
      this.iniciarCuentaRegresiva();
      setTimeout(() => {
        this.mostrarAlerta = false;
        this.usuarioService.deleteUsuario(this.usuario.id).subscribe(
          resp => {
            sessionStorage.removeItem('userLogin');
          }
        )
        this.router.navigate([""])
      }, 5000);
    } else {
      alert('Su cuenta no será eliminada')
    }
  }

  iniciarCuentaRegresiva(): void {
    const intervalId = setInterval(() => {
      this.contador--;
      if (this.contador === 0) {
        clearInterval(intervalId);

      }
    }, 1000);
  }


  toggleContrasena() {
    this.mostrado = !this.mostrado;
    this.tipoInput = this.mostrado ? 'text' : 'password';
  }

  cerrarPerfilFu() {
    this.cerrarPerfil.emit();
  }
}
