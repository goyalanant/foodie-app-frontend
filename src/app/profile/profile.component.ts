import { Component, OnInit } from '@angular/core';
import { Location } from '../Location';
import { CartService } from '../services/cart.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  credentials = {

    email : '',
    password : '',
    userName : 'PJ',
    phoneNo : '',
    userImage : '',
    street : '',
    landmark : '',
    state : '',
    city : '',
    zipcode : ''
  }
  userAddress!: Location;
  user:User=new User(this.userAddress);
  email:any;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    
    
    this.email = localStorage.getItem('email');
    // alert(this.email)
    this.cartService.getUserByEmail(this.email).subscribe(data=>{
      this.user=data;
      console.log(this.user);
      // console.log(this.user.userAddress.city)
    console.log(this.user)
    console.log(this.user.email)
    this.credentials.email = this.user.email.valueOf();
      this.credentials.userName = this.user.userName.valueOf();
      this.credentials.phoneNo = this.user.userPhone.valueOf();
      
      // if(this.user.userImage!=null)
      //   this.url=this.user.userImage.valueOf();
      if(this.user.userAddress!=null){
        this.credentials.street = this.user.userAddress.street.valueOf();
        this.credentials.landmark = this.user.userAddress.landmark.valueOf();
        this.credentials.state= this.user.userAddress.state.valueOf();
        this.credentials.city = this.user.userAddress.city.valueOf();
        this.credentials.zipcode = this.user.userAddress.zipcode.valueOf();
      }
    },error=>{
      console.log("Error getting user by email in profile")
    })
      
      console.log(this.user.email);
      
    
  }
  user_Id:any
onSubmit(){
  
  this.user_Id=localStorage.getItem('userId');
  this.user.userImage=this.url;
  this.user.userPhone=this.credentials.phoneNo;
 this.user.userAddress=new Location(this.credentials.street,this.credentials.landmark,this.credentials.state,this.credentials.city,this.credentials.zipcode)

    this.cartService.updateUser(this.user,this.user_Id).subscribe(data=>{
      console.log(this.user);
    },error=>{console.log(error)
    });

    window.location.href="";
  }
  url="assets/image.png";
  onselectFile(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      
      reader.onload=(event:any)=>{
        console.log(event.target.result)
        this.url=event.target.result;
      }
    }
  }
  
}
  // // this.user.userPhone = this.credentials.phoneNo;
  // this.user.userAddress.street=this.credentials.street;
  // alert(this.credentials.city)
  // this.user.userAddress.city=this.credentials.city;
  // console.log(this.user.userAddress.city)
  // // this.user.userAddress.landmark=this.credentials.landmark;
  // // this.user.userAddress.state=this.credentials.state;
  // // this.user.userAddress.zipcode=this.credentials.zipcode;