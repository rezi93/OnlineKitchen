import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map,tap, concatMap } from 'rxjs';
import { IProduct } from '../interface/iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _http: any;
  
  
   
  constructor(private_http:HttpClient) { 
    
    
  }

  getProductList():Observable<IProduct>{
return this._http.get('https://jsonplaceholder.typicode.com/posts')
  

  }
}
