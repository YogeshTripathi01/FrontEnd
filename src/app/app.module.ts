import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import {NgxPaginationModule } from 'ngx-pagination';
import { from } from 'rxjs';
import { UserService } from './shared/user.service';

import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { SignInComponent } from './user/sign-in/sign-in.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AdminComponent } from './admin/admin.component';
import { ProductService } from './product/product.service';
import { ProductComponent } from './product/product.component';
import { CartPageComponent } from './cartpage/cart-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import {RouterModule} from '@angular/router';
import { RefreshComponent } from './refresh/refresh.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AboutComponent } from './about/about.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { AuthGuard } from './auth.guard';
import { SocialLoginModule, AuthServiceConfig, LoginOpt } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
 
const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
};

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("149358146920-jid2n9f7553la0m3v6uu8du5iejh1ss6.apps.googleusercontent.com")
  } 
]);
 
export function provideConfig() {
  return config;
}
 

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
   ProductComponent,
    SignInComponent, 
    RegistrationComponent,
    LandingpageComponent,
    AdminComponent,
    CartPageComponent,
    ProductDetailComponent,
    AddProductComponent,
    ProductUpdateComponent,
    RefreshComponent,
    ContactComponent,
    AddressComponent,
    PaymentComponent,
    UserDetailComponent,
    AboutComponent,
    PhotogalleryComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    SocialLoginModule
  ],
  providers: [UserService, AuthGuard ,ProductService,{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }], 
  bootstrap: [AppComponent]
}) 
export class AppModule { }
