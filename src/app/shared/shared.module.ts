import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ToolbarComponent,
    AppMaterialModule
  ]
})
export class SharedModule { }
