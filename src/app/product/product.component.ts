import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Products } from '../shared/productClass';
import { Router } from '@angular/router';
import { CartPageComponent } from '../cartpage/cart-page.component';
import { Cart } from '../shared/CartModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _prod: ProductService, private router: Router) { }

  Products: any;
  productId: number;
  Name: string;

  y = new Cart();

  ngOnInit() {
    this._prod.GetProducts()
      .subscribe(
        (res: any) => {
          
            this.Products = res;
        },
        err => {
          console.log(err);
        }
      );

  }


  deleteProduct(productId) {
    const ans = confirm("do you want to delete the product");
    if (ans) {
      this.productId = this.Products.product_Id;

      this._prod.deleteProductFromDb(productId)
        .subscribe(() => {
          this.ngOnInit(); 
          
        });
        location.reload();
    }
  }

  Search() {
    if (this.Name !== '') {
      this.Products = this.Products.filter(res => {
        return res.product_Name.toLocaleLowerCase().match(this.Name.toLocaleLowerCase());
      });
    } else if (this.Name === '') {
      this.ngOnInit();
      
    }
   
  }


  

  AddItemToCart(id: number) {
    console.log(id);
    this.y.userId = +localStorage.getItem('id');
    this.y.product_Id = id; 
    this.y.quantity = 1;
    this._prod.AddToCart(this.y).subscribe();
  
  }
  
}