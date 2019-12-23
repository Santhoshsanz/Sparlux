import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdpRoutingModule } from './pdp-routing.module';
import { PdpComponent } from './pdp/pdp.component';


@NgModule({
  declarations: [PdpComponent],
  imports: [
    CommonModule,
    PdpRoutingModule
  ]
})
export class PdpModule { }
