import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { IProduct } from 'src/app/interface/iproduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
product:IProduct[]=[];
  private _service: any;
constructor(private_service:DataService,private_router:Router){

}
  ngOnInit(): void {
    
  }

getproduct(){
  this._service.getProductList().subscribe((data: any)=>console.log(data))
    
    
  
}
}
