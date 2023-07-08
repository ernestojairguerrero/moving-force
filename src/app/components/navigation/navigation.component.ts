import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  menu = [
    { name: 'Inicio', url: '/inicio', icon: 'home' },
    { name: 'Nosotros', url: '/nosotros', icon: 'cart' },
    { name: 'Servicios', url: '/servicios', icon: 'cart' },
    { name: 'Tienda', url: '/tienda', icon: 'cart' },
    { name: 'Contacto', url: '/contacto', icon: 'cart' },
  ];


}
