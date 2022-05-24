import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { CartService } from '../services/cart.service';
import { SharingdataService } from '../services/sharingdata.service';
import { SignupService } from '../services/signup.service';
import { User } from '../user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  credentials = {

    email : '',
    password : '',
    userName : ''
  }
  user:User | undefined

  constructor(private signupService : SignupService,private cartService:CartService,private sharingDataService:SharingdataService) { 
    
  }

  ngOnInit(): void {
  }

  
  onSubmit(){

    if((this.credentials.userName != '' && this.credentials.userName != '')&&(this.credentials.email != '' && this.credentials.password != '') && (this.credentials.password != null && this.credentials.password != null)){

      
      
      this.signupService.adduser(this.credentials).subscribe(
        (response : any) =>{
         console.log("fdsg"+response.token);
         this.signupService.loginUser(response.token);
       
          localStorage.setItem("email",this.credentials.email);
          window.location.href = "";
        },
        error =>{
          console.log(error);})

      //     console.log(this.credentials.email);

      // this.cartService.getUserByEmail(this.credentials.email).subscribe(data=>{
      //   this.user=data;
      //   // console.log(this.user)
      //   // console.log(this.user.userId)
      //   console.log(this.user)
      //   localStorage.setItem("userId",this.user.userId.valueOf());
      //   window.location.href = "";
      // },error=>{
      //   console.log("error getting user from cart")
      // }) 
      
     }
     else{
 
       console.log("cred is empty");
 
     }

    //  delay(10000000000)
    //  console.log("heheheh")
    //  this.cartService.getUserByEmail(this.credentials.email).subscribe(data=>{
    //    this.user=data;
       
       
    //    console.log("hello"+data)
    //    localStorage.setItem("userId",this.user.userId.valueOf());
    //    window.location.href = "";
    //  },error=>{
    //    console.log("error getting user from cart")
    //  }) 
  }

}
