import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { Restaurant } from '../Restaurant';
import { CartService } from '../services/cart.service';
import { LoginService } from '../services/login.service';
import { VendorServiceService } from '../services/vendor-service.service';
import { SignupComponent } from '../signup/signup.component';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // options: string[]=['visakan','Mari',"Akash",'Raj','Man','Aman'];
  options: Array<string>=[]
  myControl= new FormControl();
  filteredOptions!: Observable<string[]>;
  

  displayFn(subject: { name: any; }){
    return subject ? subject.name : undefined;
  }

  userName:String=""
  email:any
  restaurant!: Array<Restaurant>;
  user:User | undefined
  constructor(private dialog:MatDialog,private route:Router ,private loginService:LoginService,private cartService:CartService,private vendorService:VendorServiceService) { }

  ngOnInit(): void {
   
    this.getAllRestaurant();

    this.email = localStorage.getItem('email');
    console.log(this.email)
    this.cartService.getUserByEmail(this.email).subscribe(data=>{
      this.user=data
      if(this.user!=null)
        this.userName = this.user.userName
    },error=>{
      console.log("error in getting username");
    })
   
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
     map(value => this._filter(value))
    );
  }

  getAllRestaurant(){
    this.vendorService.getAllRestaurant().subscribe(data=>{
      this.restaurant=data;

      for(let rest of this.restaurant){
        this.options.push(rest.restaurantName.valueOf());
      }
    },error=>{console.log(error)});
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue))
  }

  logindialogBox(){

    const dialogRef = this.dialog.open(LoginComponent,{
      width: '500px',
      height: '300px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  signupDialogBox(){

    const dialogRef = this.dialog.open(SignupComponent,{
      width: '500px',
      height: '400px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  name:String='Pranjal Chaudhary';
  isLoggedIn()
  {   
  
    return this.loginService.isLoggedIn();
  }
  logout(){
   return this.loginService.logOut();
   
  }

  profileDialogBox(){
    const dialogRef = this.dialog.open(ProfileComponent);
      

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  func(name:String){
   
    this.vendorService.getRestaurantByName(name).subscribe(allData=>{
      this.route.navigate(['/restaurant'],{state:{data:allData.restaurantId}})
    },error=>{
      console.log("error");
    })
  }
}
