import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationRoutingModule } from './presentation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PresentationComponent } from './presentation.component';


@NgModule({
  declarations: [
    PresentationComponent
  ],
  imports: [
    CommonModule,
    PresentationRoutingModule,
    SharedModule,
    
  ],
})
export class PresentationModule { }
