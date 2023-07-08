import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { nosotrosRoutes } from './nosotros.routing';
import { NosotrosComponent } from './nosotros.component';

@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    RouterModule.forChild(nosotrosRoutes),
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
  ]
})
export class NosotrosModule { }
