import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../sharepage/navbar/navbar.component';
import { FooterComponent } from '../sharepage/footer/footer.component';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { RoutingModule, } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MainComponent } from './main.component';
import { MenuComponent } from '../pages/menu/menu.component';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    
    
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent
    
    
  ]
})
export class MainModule { }
