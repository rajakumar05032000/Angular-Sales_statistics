import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsK00di5t3LbtzTx0bE_4wxIYXZP1Yhsw'
    })

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
