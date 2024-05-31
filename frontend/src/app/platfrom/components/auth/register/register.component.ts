import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { Router, RouterLink } from '@angular/router';
import { fadeInOutAnimation } from '../../animations';
import { Usuario } from '../../../models/usuario';
import { LoginService } from '../../../services/login.service';
import { AdminService } from '../../../services/admin.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, AnimateOnScrollModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  animations: [fadeInOutAnimation]
})
export class RegisterComponent {
  public mostrado: boolean = false;
  public tipoInput: string = 'password';

  public usuario: Usuario = {
    id: 0,
    name: "",
    surname: "",
    email: "",
    city: "",
    username: "",
    password: "",
    dt_nac: new Date,
    n_telefono: "",
    role: {
      id: 0,
      name: ""
    },
    id_solicitud: []
  }

  rolUsuario: number = 0;

  listaUsuarios: Usuario[] = [];

  public messageBoolean1: Boolean = false;
  public messageBoolean2: Boolean = false;
  public message1: string = "Nombre de usuario no disponible."
  public message2: string = "Nombre de usuario disponible."

  error: boolean = false;



  constructor(private loginService: LoginService, private adminService: AdminService, private router: Router) {

  }

  ngOnInit() {
    this.adminService.getAllUsers().subscribe(
      resp => {
        this.listaUsuarios = resp;
      }
    )

  }




  onSubmit(formdata: Usuario) {
    this.usuario = formdata;

    this.adminService.getRolById(this.rolUsuario).subscribe(
      resp => {
        formdata.role = resp;
        this.loginService.register(formdata).subscribe(
          resp => {
            this.router.navigate(["/login"])
          },
          error => {
            this.error = true;
          })
      }
    )
  }

  toggleContrasena() {
    this.mostrado = !this.mostrado;
    this.tipoInput = this.mostrado ? 'text' : 'password';
  }

  onChangeUsername(event: any) {
    let username = event.target.value;
    this.listaUsuarios.forEach(user => {
      if (user.username != username) {
        this.messageBoolean1 = true;
      } else {
        this.messageBoolean1 = true;
      }

    })
  }



  registrado?() {
    this.router.navigate(["/login"])
  }

}

