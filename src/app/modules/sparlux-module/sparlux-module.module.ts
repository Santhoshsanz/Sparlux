import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SparluxModuleRoutingModule } from './sparlux-module-routing.module';
import { IopLayoutComponent } from './iop-layout/iop-layout.component';


@NgModule({
  declarations: [IopLayoutComponent],
  imports: [
    CommonModule,
    SparluxModuleRoutingModule
  ]
})
export class SparluxModuleModule { }
