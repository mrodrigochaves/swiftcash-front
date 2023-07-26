import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';





@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class SwiftCashModule { }
