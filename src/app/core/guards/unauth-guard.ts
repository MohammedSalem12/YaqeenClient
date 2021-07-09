import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { IAuthService } from '../services/iauth.service';

@Injectable({
  providedIn: 'root',
})
export class UnauthGuardService implements CanActivate {
  
  constructor(private authService: IAuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuth()) {
      this.router.navigate(['/pages']);
      return false;
    } else {
      return true;
    }
  }
}
