import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IRepository } from '../core/repositories/irepository';
import { Repository } from '../data/repository/repository';
import { AuthService } from './auth.service';
import { IAuthService } from '../core/services/iauth.service';



@NgModule({
  providers: [
    {provide: IRepository, useClass: Repository},
    {provide: IAuthService, useClass: AuthService},
     

  ]
})
export class ServiceModule { }
