import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InputTextModule } from 'primeng/inputtext'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CardModule } from "primeng/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    CardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
