import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation.component';

const routes: Routes = [
  {
    path: '',
    component: PresentationComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
