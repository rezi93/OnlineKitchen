import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute,Navigation } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { IProduct } from 'src/app/interface/iproduct';

@Component({
  selector: 'app-singlproduct',
  templateUrl: './singlproduct.component.html',
  styleUrls: ['./singlproduct.component.scss']
})
export class SinglproductComponent implements OnInit{

  constructor(private _route:ActivatedRoute, private _service:DataService) { }
  
  getMenuId:any;
  menuData:IProduct[]=[];
  ngOnInit(): void {
    this.getMenuId = this._route.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this._service.IProduct.filter((value: { id: any; })=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData);
        
    }
    
  }
}
