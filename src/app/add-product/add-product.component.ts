import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Router } from '@angular/router';
import { Category } from '../shared/CategoriesClass';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public service: ProductService, public router: Router) { }

  category: Category;

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    return this.service.ProdutAdd().subscribe(
      
    );
    location.reload();
  }
  alert() {
    window.alert('Product Added successfully');
  }


  onsub() {
    this.service.getCategory().subscribe(
      (res: any) => {
        this.category = res;
        console.log(res); 
      }
    );
  }




}
