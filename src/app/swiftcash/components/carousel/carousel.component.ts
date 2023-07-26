import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: true } }
 ],
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  slides = [
    { image: '../../../../assets/cash.jpg', text: 'cash image' },
    { image: '../../../../assets/card.jpg', text: 'card image' },

  ];
}
