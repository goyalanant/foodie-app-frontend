import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../Restaurant';
import { VendorServiceService } from '../services/vendor-service.service';
import { SharingdataService } from '../services/sharingdata.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 res_id:String=""
 
  constructor(private vendorService : VendorServiceService, private cartService:CartService, private route:Router) { }

  email:any
  userId:String=""
  user!: User;
  ngOnInit(): void {
    
    this.getRestaurants();
    this.email=localStorage.getItem('email');
    this.cartService.getUserByEmail(this.email).subscribe(data=>{
      this.user=data;
      localStorage.setItem("userId",this.user.userId.valueOf());
    },error=>{console.log(error)
    });

  }

  restaurants: Array<Restaurant> | undefined;
  cuisineList = [];

  getRestaurants(){
    this.vendorService.getAllRestaurantList().subscribe(data => {
      
      this.restaurants = data;
      
      for(let restaurant of this.restaurants){

          restaurant.cuisineIds = this.getCuisineNameByCuisineId(restaurant.cuisineIds);
        
      }
  
  
    },
    error => {
      console.log("error")
  
    })

  }

  getCuisineNameByCuisineId(cuisineIds : Array<String>) : Array<String>{
    
    
  
    var mylist : Array<String> = []; 
    
    for(let Id of cuisineIds){

      this.vendorService.getCuisineNames(Id).subscribe(data =>{

        mylist.push(data.cuisineName);
       

          
      },
      error =>{
        console.log(error);
      })
    }
    
    return mylist;

  }
  image(id:String){

    
     this.route.navigate(['/restaurant'],{state:{data:id}})
  }
  
}
