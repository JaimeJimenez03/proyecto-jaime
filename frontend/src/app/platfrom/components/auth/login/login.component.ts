import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { fadeInOutAnimation } from '../../animations';
import { LoginService } from '../../../services/login.service';
import { LoginRequest } from '../../../models/login-request';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, PasswordModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  animations: [fadeInOutAnimation]
})
export class LoginComponent {

  public mostrado: boolean = false;
  public tipoInput: string = 'password';

  username: string = "";
  password: string = "";

  public messageBoolean: Boolean = false;
  public message: string = "Usuario o contraseña incorrecta"


  constructor(private loginService: LoginService, public router: Router) { }

  onSubmit(objeto: LoginRequest) {
    this.loginService.login(objeto).subscribe(
      resp => {
        sessionStorage.setItem('token', resp.token)
        sessionStorage.setItem('userLogin', JSON.stringify(resp.user));
        this.router.navigate([""]);
      },
      error => {
        this.messageBoolean = true;
      })
  };


  toggleContrasena() {
    this.mostrado = !this.mostrado;
    this.tipoInput = this.mostrado ? 'text' : 'password';
  }
}
