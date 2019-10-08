import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Products } from '../shared/productClass';
import { Cart } from '../shared/CartModel';



@Injectable() 
export class ProductService {
private headers:HttpHeaders;
private accessPointUrl:string ='https://localhost:5001/api/Products/';
  constructor(private http:HttpClient) {  
  } 
public GetProducts(){
 return this.http.get(this.accessPointUrl,{headers:this.headers}); 
  }
public GetProductById(id:number){
return this.http.get(this.accessPointUrl + id);
}

public addProductToDb(product){
  return this.http.post(this.accessPointUrl,product);
}

public deleteProductFromDb(id:number){
  return this.http.delete(this.accessPointUrl +id,{headers:this.headers});
}

public updateProductInDb(id:number,product:Products){
  return this.http.put(this.accessPointUrl +id, product);
}

public AddToCart(model:Cart)
  { 
    console.log(model);
    return this.http.post('https://localhost:5001/api/Cart',model) ; 
  }
}