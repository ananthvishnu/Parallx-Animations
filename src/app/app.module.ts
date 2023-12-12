import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ParallxComponent } from './parallx/parallx.component';
import { SunsetComponent } from './sunset/sunset.component';
import { ForestComponent } from './forest/forest.component';
import { AdventureComponent } from './adventure/adventure.component';
import { NightgoastComponent } from './nightgoast/nightgoast.component';
import { Forest2Component } from './forest2/forest2.component';
import { TravelComponent } from './travel/travel.component';
import { HackerFormComponent } from './forms/hacker-form/hacker-form.component';
import { HomeComponent } from './home/home.component';
import { CloudyComponent } from './cloudy/cloudy.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    AdventureComponent,
    ParallxComponent,
    SunsetComponent,
    ForestComponent,
    NightgoastComponent,
    Forest2Component,
    TravelComponent,
    HackerFormComponent,
    HomeComponent,
    CloudyComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
