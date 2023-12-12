import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParallxComponent } from './parallx/parallx.component';
import { SunsetComponent } from './sunset/sunset.component';
import { ForestComponent } from './forest/forest.component';
import { AdventureComponent } from './adventure/adventure.component';
import { NightgoastComponent } from './nightgoast/nightgoast.component';
import { Forest2Component } from './forest2/forest2.component';
import { TravelComponent } from './travel/travel.component';
import { HackerFormComponent } from './forms/hacker-form/hacker-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'parallx',component:ParallxComponent},

  {path:'sunset',component:SunsetComponent},
  {path:'forest',component:ForestComponent},
  {path:'adventure',component:AdventureComponent},
  {path:'goast',component:NightgoastComponent},
  {path:'forest2',component:Forest2Component},
  {path:'travel',component:TravelComponent},


  {path:'hacker-form',component:HackerFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
