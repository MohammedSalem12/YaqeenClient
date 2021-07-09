import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardRouteService } from '../core/guards/auth-guard';
import { PresentationComponent } from './presentation.component';

const routes: Routes = [
  {
    path: '',
    component: PresentationComponent,
    canActivate: [GuardRouteService],
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
