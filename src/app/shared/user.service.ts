import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = '  https://localhost:5001/api';

  formModel = this.fb.group({
    FirstName: ['', Validators.required],
    LastName: [''],
    Email: ['', Validators.email],
    phone: [''],
    Password: ['', Validators.required],
    ProfilePic: [''],
    Role: ['']
  }); 


  register() {

    var body = {
      FirstName: this.formModel.value.FirstName,
      LastName: this.formModel.value.LastName,
      Email: this.formModel.value.Email,
      phone: this.formModel.value.phone,
      Password: this.formModel.value.Password,
      ProfilePic: this.formModel.value.ProfilePic,
      Role: this.formModel.value.Role

    };
    return this.http.post(this.BaseURI + '/register', body);

  }


}
