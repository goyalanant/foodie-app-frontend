import { Component, OnInit } from '@angular/core';
import { Cart } from '../Cart';
import { CartItem } from '../cartItem';
import { CartService } from '../services/cart.service';
import { SharingdataService } from '../services/sharingdata.service';
import  Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  user_Id:any;
  cart!:Cart;
  cartItem:Array<CartItem> | undefined
  totalAmount:number=0;
  constructor(private cartService:CartService,private route:Router) { }

  ngOnInit(): void {
    this.getCartDetails();

  }

  getCartDetails(){
    this.user_Id=localStorage.getItem('userId');
    this.cartService.getUserCart(this.user_Id).subscribe(data=>{
      this.cartItem=data;
      for(let cart of this.cartItem){
        this.totalAmount = this.totalAmount + (cart.dish.dishPrice[0]*cart.dishQuantity)
      }
      
    },error=>{
      console.log("error in getting cart of user")
    })
  }
  
  
  sweet(){
    Swal.fire({
      title: 'Are you sure?',
      text: "Your Order will be placed.!",
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, place order!'
    }).then((result: { isConfirmed: any; }) => {

     
      if (result.isConfirmed) {
        this.cartService.emptyCart(this.user_Id).subscribe(data=>{
          console.log(data);
        },error=>{
          console.log(error);
        })
        Swal.fire(
          'Order Placed Successfully!',
         
          //'Your file has been deleted.',
          'Success !!',
          
        )
        window.setTimeout(function() {
          window.location.href = "";
      }, 2000);
      }
    })
  }
  
}
function icon(arg0: string, icon: any, arg2: string, arg3: string) {
  throw new Error('Function not implemented.');
}

