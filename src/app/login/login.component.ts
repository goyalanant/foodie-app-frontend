import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { LoginService } from '../services/login.service';
import { SharingdataService } from '../services/sharingdata.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {

    email : '',
    password : ''
  }
  isregistered : boolean | undefined;
  user:User | undefined

  constructor(private loginService:LoginService,private cartService:CartService, private route:Router, private sharingDataService:SharingdataService) { }

  ngOnInit(): void {
    this.isregistered = false;
  }

  onSubmit(){
    
    
    if((this.credentials.email != '' && this.credentials.password != '') && (this.credentials.email != null && this.credentials.password != null)){
      // alert(this.credentials.email)
      
     this.loginService.generateToken(this.credentials).subscribe(
       (response : any) =>{

      //  console.log("HEllo"+response.token)
      // alert("HEllo  "+response.token)
        this.loginService.loginUser(response.token);
        
       },
       error =>{
         this.isregistered = true;
         console.log(error);

       }
     )
     this.cartService.getUserByEmail(this.credentials.email).subscribe(data=>{
      this.user=data;
      // console.log(this.user)
      // console.log(this.user.userId)
      localStorage.setItem("userId",this.user.userId.valueOf());
      localStorage.setItem("email",this.credentials.email);
      window.location.href = ""
    },error=>{
      console.log("error getting user from cart")
    }) 
      
    }
    else{

      console.log("cred is empty");

    }

     
    //  this.cartService.getUserByEmail(this.credentials.email).subscribe(data=>{
    //   this.user=data;
    //   // console.log(this.user)
    //   // console.log(this.user.userId)
    //   localStorage.setItem("userId",this.user.userId.valueOf());
    // },error=>{
    //   console.log("error getting user from cart")
    // })    
 
  
  }
}
