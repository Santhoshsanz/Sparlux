import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlpRoutingModule } from './plp-routing.module';
import { PlpComponent } from './plp/plp.component';


@NgModule({
  declarations: [PlpComponent],
  imports: [
    CommonModule,
    PlpRoutingModule
  ]
})
export class PlpModule { }
