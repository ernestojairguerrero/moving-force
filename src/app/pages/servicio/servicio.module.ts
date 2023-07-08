import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { servicioRoutes } from './servicio.routing';

import { ServicioComponent } from './servicio.component';

@NgModule({
  declarations: [
    ServicioComponent
  ],
  imports: [
    RouterModule.forChild(servicioRoutes),
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
  ]
})
export class ServicioModule { }
