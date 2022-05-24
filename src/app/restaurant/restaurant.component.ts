import { Component, OnInit } from '@angular/core';
import { NativeDateModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartItem } from '../cartItem';
import { Cuisine } from '../Cuisine';

import { Dish } from '../Dish';
import { LoginComponent } from '../login/login.component';
import { Restaurant } from '../Restaurant';
import { AuthGuard } from '../services/auth.guard';
import { CartService } from '../services/cart.service';
import { SharingdataService } from '../services/sharingdata.service';
import { VendorServiceService } from '../services/vendor-service.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  

  res_id = history.state.data
  dishes:Array<Dish> | undefined;
  cuisine:Cuisine|undefined;
  quantity:number=0;
  cartItemCounts:number = 0
  restaurant!: Restaurant;
 
  constructor(private dialog:MatDialog, private vendorService:VendorServiceService, private cartService:CartService, private auth:AuthGuard, private route:Router) { }

  ngOnInit(): void {
    // this.sharingDataService.res_Id.subscribe(data=>{
    //   this.res_id=data
    // },error=>{
    //   console.log(error);
    // })
    this.getRestaurant()
    this.getAllDishes()
   
  }
    getRestaurant(){
      this.vendorService.getRestaurantById(this.res_id).subscribe(data=>{
        this.restaurant=data;
      },error=>{
        console.log(error)})
    }
  getAllDishes(){
    this.vendorService.getAllDishes(this.res_id).subscribe(data=>{
      this.dishes=data;
    },
    error=>{
      console.log(error)
    })
  }
  
 
  
 
  dishIds:Array<String>=[]
  addToCart(dishId:String){
    
        this.quantity=parseInt((<HTMLInputElement>document.getElementById(dishId.valueOf())).value);
      
      if(this.auth.canActivate())
      {let count=0;
        
        for(let dish of this.dishIds){
          if(dish == dishId){
            count++;
          }
        }
        if(count==0){
        this.cartItemCounts=this.cartItemCounts+1;
        this.dishIds.push(dishId)
        }

        this.vendorService.getDishByDishId(dishId,this.res_id).subscribe(data=>{
         
        this.checkCartItem(data,this.quantity,this.res_id);

        },error=>{
          console.log("get dish by dish id error");
        })
        
      }
      else{
      const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

   
        

  }
     
  }
  user_Id : any;
  dish!: Dish
  cartItem:CartItem=new CartItem(this.dish)
  
  checkCartItem(dish:Dish,quantity:number,res_Id:String){
    // alert(this.cartItem2.dish.dishName)
    this.cartItem.dish=dish;
    this.cartItem.dishQuantity=quantity;
    this.cartItem.restaurantId=res_Id;
    this.user_Id = localStorage.getItem('userId')
    this.cartService.addDishAndQuantityToCartItem(this.cartItem,this.user_Id).subscribe(data=>
      {
        console.log(data);
      },error=>{
        console.log("error in checkcart item method");
      })
  }
  // onSubmit()
  // {
  //   this.quantity=(<HTMLInputElement>document.getElementById("dish.dishId")).value;
  //   alert(this.quantity);
  // }
 
  cartIcon(){
    if(this.auth.canActivate())
      {
        this.route.navigate(['/cart']);
      }
      else
      {
        const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
      }
  }
  u_Id:any
  restaurant2!: Restaurant;
  toggle = true;
status = 'Enable';
  addFavourite(id:Restaurant){
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';


    if(this.auth.canActivate())
      {
    // this.vendorService.getRestaurantById(id).subscribe(data=>{
    //   this.restaurant2=data;
    // },error=>{console.log(error)
    // })
    console.log(id);
     this.u_Id = localStorage.getItem('userId')?.valueOf();
    this.cartService.addRestaurantToFavourite(this.u_Id,id).subscribe(data=>{
      console.log("Favourite added");
    },
    error=>{console.log(error)});
  }
    else{
      const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      });
      } 
  }
}
