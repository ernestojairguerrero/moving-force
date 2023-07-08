import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  servicios: any[] = [
    { img: '../../../assets/img/carga.jpg', title: 'Transporte de carga', description: 'Distribución a gran volumen de a nivel nacional. Contamos con una flota de carros con capacidad de hasta 6  toneladas y 40 metros cúbicos' },
    { img: '../../../assets/img/embalaje.jpeg', title: 'Embalaje industrial', description: 'Contamos con material OSB para empaques a la medida. Adicionalmente con todo tipo de material de embalaje.' },
    { img: '../../../assets/img/paqueteria.jpeg', title: 'Paquetería corporativa', description: 'Nos hacemos cargo de tus envíos de paquetes o productos a toda Lima.' },
    { img: '../../../assets/img/mudanzas.jpeg', title: 'Mudanzas corporativas', description: 'Mudamos tu oficina, tu fábrica, tu taller de trabajo, tiendas de ropa, etc. Con procedimientos experimentados.' },
    { img: '../../../assets/img/almacenaje.jpg', title: 'Almacenaje temporal', description: 'Contamos con almacenes acondicionados para resguardar tus productos no perecederos.' },
    { img: '../../../assets/img/alquiler.jpeg', title: 'Alquiler de camiones', description: 'Alquilamos camiones para tu uso personalizado. Bajo contrato.' },
    // { img: '../../../assets/img/carga.jpg', title: '', description: '' },
  ];

  cotizaya: string = 'https://wa.me/+593986496051?text=Hola%20mi%20nombre%20es:'

}
