import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { CartComponent } from './cart/cart.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path : '',
    component : OrderPlacedComponent,
    pathMatch : "full"
  },
  {
    path : 'add-restaurant',
    component : AddRestaurantComponent,
    pathMatch : "full"
  },
  {
    path : 'home',
    component : HomeComponent,
    pathMatch : "full"
  },
  {
    path : 'restaurant',
    component : RestaurantComponent,
    pathMatch : "full"
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : "full"
  },
  {
    path : 'cart',
    component : CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'signup',
    component : SignupComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'favourite',
    component : FavouriteComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'Aboutus',
    component : AboutUsComponent, 
    pathMatch : "full" 
  },
  {
    path : 'privacy',
    component : PrivacyComponent, 
    pathMatch : "full" 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
