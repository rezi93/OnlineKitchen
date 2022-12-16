import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route,Routes } from '@angular/router';
import { SigninComponent } from './login/signin/signin.component';


const routes: Route[] = [
  {
    path:'',
    redirectTo:'signin',
    pathMatch:'full'
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'main',
    loadChildren: ()=> import('./main/main.module').then(m=>m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
