import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../domain/login-model';

@Injectable({
  providedIn: 'root'
})
export abstract class IAuthService {
  abstract logOut(): void ;
  abstract isAuth(): boolean;
  abstract login(request:LoginModel) : Observable<any>;
}
