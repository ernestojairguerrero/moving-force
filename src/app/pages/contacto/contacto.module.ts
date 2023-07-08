import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto.component';
import { RouterModule } from '@angular/router';
import { contactoRoutes } from './contacto.routing';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    RouterModule.forChild(contactoRoutes),
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
  ]
})
export class ContactoModule { }
