import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder) { }

formModel=this.fb.group({
  FirstName:['',Validators.required],
  LastName:[''],
  EmailAddress:['',Validators.email],
  PhoneNumber:[''],
  Password:['',Validators.required],
  ProfilePic:[''],
  Role:['']
});

}
