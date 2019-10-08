import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/UserModel'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URI:string='https://localhost:5001/api/Login/';

  constructor(private http:HttpClient) { }



  public updateUserInDb(id:number,user:User){

    return this.http.put(this.URI+id,user)
  }
}
