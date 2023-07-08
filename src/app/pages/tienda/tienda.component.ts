import { Component } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent {

  flyer: string = 'assets/img/tienda.jpg';

  store: any[] =[
    {img: 'src/assets/img/burbupack.jpg', alt: 'Burbupack Moving Force' },
    {img: 'src/assets/img/burbupack.jpg', alt: 'Burbupack Moving Force' },
    {img: 'src/assets/img/burbupack.jpg', alt: 'Burbupack Moving Force' },
    {img: 'src/assets/img/burbupack.jpg', alt: 'Burbupack Moving Force' },
    {img: 'src/assets/img/burbupack.jpg', alt: 'Burbupack Moving Force' },
    {img: 'src/assets/img/burbupack.jpg', alt: 'Burbupack Moving Force' },
    {img: 'src/assets/img/burbupack.jpg', alt: 'Burbupack Moving Force' },
    {img: 'src/assets/img/burbupack.jpg', alt: 'Burbupack Moving Force' },
  ]


}
