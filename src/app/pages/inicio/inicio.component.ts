import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  // flyer: string = 'assets/img/banner.webp';
  flyer: string = 'assets/svg/banner.svg';

  items = [
    { title: 'Cobertura nacional', subtitle: 'Llegamos a todo el Perú' },
    { title: 'Servicio 24/7', subtitle: 'Siempre estamos disponible para ti' },
    { title: 'Unidades modernas', subtitle: 'Flota profesional' },
    { title: 'Personal calificado', subtitle: 'Equipo de profesionales' },
  ];

  cotizaya: string = 'https://wa.me/51913394159?text=Hola%20mi%20nombre%20es:'

}
