import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { inicioRoutes } from './inicio.routing';

import { ComponentsModule } from 'src/app/components/components.module';

import { InicioComponent } from './inicio.component';

@NgModule({
  declarations: [
    InicioComponent,
  ],
  imports: [
    RouterModule.forChild(inicioRoutes),
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
  ]
})
export class InicioModule { }
