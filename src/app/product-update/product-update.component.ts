import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ProductComponent } from '../product/product.component';
import { Products } from '../shared/productClass';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
id;
model:Products;


  constructor(private service :ProductService , public router:Router,public route:ActivatedRoute)  { }

  ngOnInit() {
    this.id=+this.route.snapshot.paramMap.get('id');
    this.service.GetProductById(this.id).subscribe(
      (response:any)=>{
        this.model=response;
        console.log(this.id);

      },     
    error=>{
        console.log('no id found');
    }
    );
  }

  editProduct(nf:NgForm){
    
    return this.service.updateProductInDb(this.id,nf.value).subscribe();
  }




}
