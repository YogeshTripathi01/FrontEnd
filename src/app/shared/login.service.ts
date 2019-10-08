import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private login:FormBuilder,private http:HttpClient) { }
 readonly BaseURI='https://localhost:5001/api';

 formModel=this.login.group({
   Email:[''],
   Password:['']

 });
 
   loginuser(){

    var body={
      Email:this.formModel.value.Email,
      Password:this.formModel.value.Password
    };
    return this.http.post(this.BaseURI+ '/Login',body); 
   }

   SocialLogin(object) {
    return this.http.post('https://localhost:5001/api/Login/social' , object);
  }


}
