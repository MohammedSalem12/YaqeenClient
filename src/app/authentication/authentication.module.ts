import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../service/auth.service';
const ANGULAR_MATERIAL_MODULES = [
  MatIconModule,
]

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    [...ANGULAR_MATERIAL_MODULES],

  ],
  providers: [AuthService],
})
export class AuthenticationModule { }
