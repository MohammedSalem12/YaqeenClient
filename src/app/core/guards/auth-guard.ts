import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { IAuthService } from '../services/iauth.service';

@Injectable({
  providedIn: 'root',
})
export class GuardRouteService implements CanActivate {
  constructor(private authService: IAuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isAuth()) {
      this.router.navigate(['auth']);
      return false;
    } else {
      return true;
    }
  }
}
