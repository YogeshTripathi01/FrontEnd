import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private _prod:ProductService ,private route:ActivatedRoute,private router:Router) {

   }

   productId :number;
   product: any[];
   pageTitle='Product Details';
   ngOnInit() {

    this.productId = +this.route.snapshot.paramMap.get('id');

    console.log(this.productId);
    this._prod.GetProductById(this.productId).subscribe(
      (res: any[]) => {
        console.log(res),
        console.log(this.productId);
        this.product = res;
      },
      err => {
        console.log(err);
      }
    );
  }
    

  }

