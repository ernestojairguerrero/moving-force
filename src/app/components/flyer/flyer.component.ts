import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flyer',
  templateUrl: './flyer.component.html',
  styleUrls: ['./flyer.component.scss']
})
export class FlyerComponent {
  @Input() flyer!: string;

}
