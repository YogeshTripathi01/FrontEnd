import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Cart } from './CartModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  readonly BaseURI = 'https://localhost:5001/api';

  formModel = this.fb.group({
    Product_Name: [''],
    Product_Price: [''],
    category_Id: [''],
    Product_Description: [''],
    Product_Image: [''],
    Product_Quantity: ['']

  });

  ProdutAdd() {

    var body = {
      Product_Name: this.formModel.value.Product_Name,
      Product_Price: this.formModel.value.Product_Price,
      category_Id: this.formModel.value.category_Id,
      Product_Description: this.formModel.value.Product_Description,
      Product_Image: this.formModel.value.Product_Image,
      Product_Quantity: this.formModel.value.Product_Quantity

    };
    return this.http.post(this.BaseURI + '/products', body);
  }

  public getCategory() {

    return this.http.get(this.BaseURI + '/categories');
  }

  
  public AddToCart(model: Cart) {
    console.log(model);
    return this.http.post('https://localhost:5001/api/Cart', model);
  }
}