import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { Restaurant } from '../Restaurant';
import { CartService } from '../services/cart.service';
import { User } from '../user';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  restaurantList!: Array<Restaurant>;
  constructor(private cartService:CartService,private route:Router) { }

  ngOnInit(): void 
  {
    this.getAllFavourite();
  }
  userId:any;
  email:any
  user!: User;
  getAllFavourite(){
    this.userId = localStorage.getItem('userId');
    this.cartService.getAllFavourite(this.userId).subscribe(data=>{
      this.restaurantList=data;
    },error=>{console.log(error)})
    this.email=localStorage.getItem('email');
    this.cartService.getUserByEmail(this.email).subscribe(data=>{
      this.user=data;
      console.log(this.user)
    },error=>{console.log(error)})
  }

  image(id:String){
   
    // this.sharingDataService.setRestaurantId(id);
    // this.sharingDataService.setId(id);
    // this.route.navigate(['/restaurant'])
    
     this.route.navigate(['/restaurant'],{state:{data:id}})
  }
  remove(restaurantId:String){
    this.cartService.removeRestaurantFromFavourite(restaurantId,this.userId).subscribe(data=>{
      console.log(data);
    },error=>{console.log(error)
    })
    window.setTimeout(function() {
      window.location.href = "/favourite";
  }, 1000);
  }

}
