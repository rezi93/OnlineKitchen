import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes,Route, } from '@angular/router';
import { MainComponent } from '../main.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { MenuComponent } from 'src/app/pages/menu/menu.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';

const routes:Route[]=[
{
  path:'',
  component:MainComponent,
  children:[
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'menu',
      component:MenuComponent
    },
    {
      path:'about',
      component:AboutComponent
    },
    {
      path:'contact',
      component:ContactComponent
    }
  ]
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
