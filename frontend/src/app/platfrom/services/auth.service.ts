import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return sessionStorage.getItem("token");
  }

  logout(): void {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userLogin");


    this.router.navigate(["/login"])
  }


}
