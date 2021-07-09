import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full'},
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
