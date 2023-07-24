import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppImportsModule } from './shared/app-imports/app-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './swiftcash/containers/footer/footer.component';
import { HeaderComponent } from './swiftcash/containers/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
