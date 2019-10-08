import { Component, OnInit } from '@angular/core';
import { User } from '../shared/UserModel';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import {NgForm,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id;
  model:User;
  constructor(private _user:UserService,public router:Router) { }

  ngOnInit() {
    this.id=localStorage.getItem('id');
   
  }

  editUser(nf:NgForm){
     this.id=localStorage.getItem('id');
    return this._user.updateUserInDb(this.id,nf.value).subscribe();
    console.log("hello");
  }

}
