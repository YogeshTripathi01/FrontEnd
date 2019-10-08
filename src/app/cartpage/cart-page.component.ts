import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { Cart } from '../shared/CartModel';
import { logWarnings } from 'protractor/built/driverProviders';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  model=new Cart();   
  cart :any;
  y=new Cart();
  userId:any;
  totalPrice=0;

  constructor(private _cart:CartService,private router:Router,private _prod:ProductService) { }

  ngOnInit() {
    this.model.userId=+localStorage.getItem('id'); 
    return this._cart.getCartfromApi(this.model).subscribe(
      (res:any) => {
        this.cart=res;
        console.log(this.cart);
        },
        err =>{
          console.log(err);
        }
    ) 
  }
  
  CartTotal(){
    this.y.userId=+localStorage.getItem('id');
    this._cart.CartTotal(this.y).subscribe((res:any)=>{ 
      localStorage.setItem('total',res);
      this.totalPrice = +localStorage.getItem('total');
      console.log(this.totalPrice);
      console.log("this is total") ;
      this.ngOnInit();
    });
  }


  AddCart(id:number){
    this.model.userId=+localStorage.getItem('id'); 
    this.model.product_Id=id;
    this.model.quantity=1;

     this._prod.AddToCart(this.model).subscribe((res:any)=>{
      
      this.ngOnInit();
      
     });

  }

  RemoveFromCart(id:number){
    this.model.userId=+localStorage.getItem('id');
    this.model.product_Id=id;
    this.model.quantity=1;
    this._cart.RemoveCart(this.model).subscribe((res:any)=>{
      this.ngOnInit();
    });
  } 
}

