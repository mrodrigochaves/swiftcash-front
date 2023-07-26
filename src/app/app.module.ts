import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppImportsModule } from './shared/app-imports/app-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './swiftcash/components/footer/footer.component';
import { HeaderModule } from './swiftcash/components/header/header.module';
import { CarouselModule } from '../app/swiftcash/components/carousel/carousel.module'


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppImportsModule,
    HeaderModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
