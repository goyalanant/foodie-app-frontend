import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './body/body.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import {MatSelectModule} from '@angular/material/select';
import { RestaurantComponent } from './restaurant/restaurant.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component'
import{ MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { FavouriteComponent } from './favourite/favourite.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { MatTabsModule } from '@angular/material/tabs';
import { OrderPlacedComponent } from './order-placed/order-placed.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    BodyComponent,
    AddRestaurantComponent,
    SignupComponent,
    FooterComponent,
    RestaurantComponent,
    CartComponent,
    ProfileComponent,
    FavouriteComponent,
    NavbarComponent,
    AboutUsComponent,
    PrivacyComponent,
    OrderPlacedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatBadgeModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatTabsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
