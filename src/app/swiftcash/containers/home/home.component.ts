import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: true } }
 ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides = [
    { image: '../../../../assets/cash.jpg', text: 'cash image' },
    { image: '../../../../assets/card.jpg', text: 'card image' },

  ];
}
