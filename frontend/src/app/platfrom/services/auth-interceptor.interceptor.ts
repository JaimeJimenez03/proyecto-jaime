import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let intReq = req;
    const token = this.authService.getToken();
    if (token != null) {
      intReq = req.clone({ headers: req.headers.set('Autorization', 'Barer ' + token) })
    }
    return next.handle(intReq).pipe(catchError(x => this.handleAuthError(x)));
  }


  private handleAuthError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 401 || error.status === 403) {
      this.authService.logout();
      this.router.navigate(["/login"]);
      return of(error.message);
    }

    return throwError(() => new Error(error.message))
  }

}
export const AuthInterceptorProvider = [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }];

// intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//   const token = sessionStorage.getItem('token');

//   if (token) {
//     const cloned = req.clone({
//       headers: req.headers.set('Authorization', `Bearer ${token}`)
//     });

//     return next.handle(cloned);
//   } else {
//     return next.handle(req);
//   }
// }





