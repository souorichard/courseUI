import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    AppMaterialModule
  ]
})
export class SharedModule { }
