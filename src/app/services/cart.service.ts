import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../Cart';
import { CartItem } from '../cartItem';
import { Restaurant } from '../Restaurant';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }
  
  baseurl = "http://localhost:8900/api/v5/cart";

  getUserByEmail(email:String) : Observable<User>{
    return this.httpClient.get<User>(`${this.baseurl}/getUserByEmail/${email}`);
  }
  addDishAndQuantityToCartItem(cartItem:CartItem,userId:String) : Observable<object>{
    return this.httpClient.post(`${this.baseurl}/addDishToCart/${userId}`,cartItem);
  }
  getUserCart(userId:String) : Observable<Array<CartItem>>{
    return this.httpClient.get<Array<CartItem>>(`${this.baseurl}/getCartDetails/${userId}`)
  }
  updateUser(user:User,userId:String) : Observable<object>{
    return this.httpClient.post(`${this.baseurl}/updateUser/${userId}`,user);
  }
  addRestaurantToFavourite(res_Id:String,restaurant:Restaurant) : Observable<object>{
    return this.httpClient.post(`${this.baseurl}/addFavourite/${res_Id}`,restaurant);
  }
  getAllFavourite(user_Id:String) : Observable<Array<Restaurant>>{
    return this.httpClient.get<Array<Restaurant>>(`${this.baseurl}/getAllFavourite/${user_Id}`);
  }
  emptyCart(userId:String) : Observable<object>{
    return this.httpClient.delete(`${this.baseurl}/emptyCart/${userId}`);
  }
  removeRestaurantFromFavourite(restaurantId:String,userId:String) : Observable<object>{
    return this.httpClient.delete(`${this.baseurl}/deleteFavourite/${restaurantId}/${userId}`);
  }
}
