import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../sharepage/navbar/navbar.component';
import { FooterComponent } from '../sharepage/footer/footer.component';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';

import { RegisterComponent } from '../login/register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from '../login/signin/signin.component';
import { RouterModule } from '@angular/router';
import { RoutingModule, } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SigninComponent,
    RegisterComponent
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
    SigninComponent,
    RegisterComponent,
    
  ]
})
export class MainModule { }
