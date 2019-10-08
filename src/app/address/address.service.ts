import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  formModel = this.fb.group({
    userID: [''],
    city: ['',Validators.required],
    pinCode: ['',Validators.required],
    address1: ['',Validators.required],
    address2: [''],
    houseNumber: ['',Validators.required],
    contact_Number: ['',Validators.required]

  });

 public AddressAdd() {
    var body =
    {
      userID: this.formModel.value.userID,
      // userId:localStorage.getItem('id'),
      City: this.formModel.value.city,
      Pincode: this.formModel.value.pinCode,
      Address1: this.formModel.value.address1,
      Address2: this.formModel.value.address2,
      HouseNumber: this.formModel.value.houseNumber,
      ContactNumber: this.formModel.value.contact_Number
    };
   
    return this.http.post('https://localhost:5001/api/addresses',body)
  }

  public GetAddress() {
    return this.http.get('https://localhost:5001/api/addresses');

  }

}
