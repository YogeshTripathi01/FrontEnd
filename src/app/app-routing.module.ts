import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductComponent } from './product/product.component';
import { CartPageComponent } from './cartpage/cart-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { RefreshComponent } from './refresh/refresh.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AboutComponent } from './about/about.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { AuthGuard } from './auth.guard';





export const routes: Routes = [
  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  {
    path: 'user', component: UserComponent,
    children: [

      { path: 'registration', component: RegistrationComponent },
      { path: 'signin', component: SignInComponent }

    ]
  },
  { path: 'landingpage', component: LandingpageComponent },

  { path: 'contact', component: ContactComponent },
  { path: 'photogallery', component: PhotogalleryComponent },
  { path: 'address', component: AddressComponent },
  { path: 'userdetails/:id', component: UserDetailComponent },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'product', component: ProductComponent }, 
  { path: 'productdetails/:id', component: ProductDetailComponent },
  { path: 'cartpage', component: CartPageComponent },
  { path: 'addproduct', component: AddProductComponent },
  { path: 'updateProduct/:id', component: ProductUpdateComponent},
  { path: 'refresh', component: RefreshComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
