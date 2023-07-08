import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { serviciosRoutes } from './servicio.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiciosComponent } from './servicios.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    ServiciosComponent
  ],
  imports: [
    RouterModule.forChild(serviciosRoutes),
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class ServicioModule { }
