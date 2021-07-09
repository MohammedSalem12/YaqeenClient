import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LoginModel } from '../core/domain/login-model';
import { IRepository } from '../core/repositories/irepository';
import { IAuthService } from '../core/services/iauth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends IAuthService {
 

  constructor(
    private readonly router: Router,
    private readonly http: HttpClient,
    private _repository:IRepository<any>,
  ) { super()}
  logOut(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/auth']); 
   }
  isAuth(): boolean {
    const token = localStorage.getItem('TOKEN'); //token
    if (token) {
      return true;
    }
    return false; 
   }

   login(request: LoginModel): Observable<any> {
    return   this._repository.post("https://localhost:44318/api/auth/Login",request)  ;
  }

  
}
