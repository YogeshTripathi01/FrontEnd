import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Cart } from '../shared/CartModel';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }


  public GetCart(model: Cart) {
    console.log(model);
    return this.http.get('https://localhost:5001/api/cart');
  }

  public getCartfromApi(model:Cart){
    return this.http.post("https://localhost:5001/api/Cart/getCart",model)
  
  }

  public RemoveCart(model:Cart){
    return this.http.post("https://localhost:5001/api/Cart/remove",model)
  }
   
  public CartTotal(model:Cart){
    return this.http.post("https://localhost:5001/api/Cart/getTotal",model);
  }


}
