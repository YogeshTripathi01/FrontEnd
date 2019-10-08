import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Router } from '@angular/router';
import { Cart } from '../shared/CartModel';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  config: any;

  constructor(private _prod: ProductService, private router: Router, private toaster: ToastrService,
    private route: ActivatedRoute
  ) { }
  Name: string;
  Products: any;
  y = new Cart();
  

  id = localStorage.getItem('id');
  ngOnInit() {
    this._prod.GetProducts()
      .subscribe(
        (res: any) => {
          console.log(res),
            this.Products = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  AddItemToCart(id: number) {
    if (localStorage.getItem('id') == null) {
      console.log("login first");
      this.toaster.success("login First");

    } else {
      console.log(id);
      this.y.userId = +localStorage.getItem('id');
      this.y.product_Id = id;
      this.y.quantity = 1;
      this._prod.AddToCart(this.y).subscribe();
      this.toaster.success("added to cart success!!");
    }
  }

  logout() {
    localStorage.clear();
    this.ngOnInit();
    this.router.navigate(['/refresh'])
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

} 
