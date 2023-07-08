import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  title: string = 'Moving Force';
  ws: string = 'https://wa.me/51913394159?text=Hola%20mi%20nombre%20es:'

  year = new Date().getFullYear();

}
