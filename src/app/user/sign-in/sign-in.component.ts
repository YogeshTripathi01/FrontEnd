import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
 

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  private users: SocialUser;
  private loggedIn: boolean;
  constructor(public service: LoginService, public router: Router, public toastr: ToastrService,private authService:AuthService) { }

  user:any;
  
  ngOnInit() {

  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;
      this.loggedIn = (userData != null);
      const obj = {
        email: userData.email
 
      };
 
      console.log(obj);
 
      this.service.SocialLogin(obj)
        .subscribe(
          (res: any) => {
            console.log(res);
            this.toastr.success('User Login Successful');
            this.router.navigate(['/']);
            localStorage.setItem('email', obj.email);
            localStorage.setItem('token', res.token);
            localStorage.setItem('id', res.id);
            localStorage.setItem('name', res.name);
            localStorage.setItem('userRole', res.a);
 
          },
          err => {
            console.log(err);
          }
        );
 
    }
    );
  }
 
  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['/login']);
    this.toastr.success('You have been logged out successfully !');
  }


  onSubmit() {
    this.service.loginuser().subscribe(
      (res: any) => { 
        console.log(res);
        if (res.A == 'user') {
          this.toastr.success("user login successfull");
          localStorage.setItem('token',res.token);
          this.service.formModel.reset();
          localStorage.setItem('id', res.UserId);  
          this.router.navigate(['/landingpage']);
        }  
        else if (res.A == 'admin') {

          this.router.navigate(['/product']);
          this.service.formModel.reset();
          this.toastr.success("admin login success");
        }
        else { 
          this.toastr.error("Invalid email or Password");
        }
      } 
    );
  }
} 