import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthGuardService } from './core/guards/unauth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.module').then( (m) => m.AuthenticationModule),
      canActivate: [UnauthGuardService],
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./presentation/presentation.module').then((m) => m.PresentationModule),
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
