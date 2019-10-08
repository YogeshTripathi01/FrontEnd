import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router'
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, public router: Router) { }
 
  ngOnInit() {
    this.service.formModel.reset();
  }
     
  onSubmit() {
    this.service.register().subscribe(

    );
    location.reload();
  }
  alert() {
    window.alert('REGISTRATION SUCCESSFULL');

  }


}
