import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,map,tap, concatMap } from 'rxjs';
import { __values } from 'tslib';
import { IProduct, IProductBaseReponse } from '../interface/iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  IProduct: any;
  
  
  
   
  constructor(private _http: HttpClient, private _route:Router) { 
    
    
  }

  getProductList():Observable<IProduct[]>{
return this._http.get<IProductBaseReponse>('https://dummyjson.com/products').pipe(
  map(result=>result.products)
)
  

  }
}
