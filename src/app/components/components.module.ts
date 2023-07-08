import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { FlyerComponent } from './flyer/flyer.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';

@NgModule({
  declarations: [
    FlyerComponent,
    NavigationComponent,
    FooterComponent,
    WhatsappComponent,
    ServicesComponent,
    ServicesComponent
  ],
  exports: [
    FlyerComponent,
    NavigationComponent,
    FooterComponent,
    WhatsappComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
