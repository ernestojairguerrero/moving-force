import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaComponent } from './tienda.component';
import { RouterModule } from '@angular/router';
import { tiendaRoutes } from './tienda.routing';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    TiendaComponent
  ],
  imports: [
    RouterModule.forChild(tiendaRoutes),
    CommonModule,
    ComponentsModule,
  ]
})
export class TiendaModule { }
