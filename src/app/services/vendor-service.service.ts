import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuisine } from '../Cuisine';
import { Dish } from '../Dish';
import { Restaurant } from '../Restaurant';
import { Vendor } from '../vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  baseurl = "http://localhost:9300/api/v5/vendor";

  getAllRestaurantList() : Observable<Restaurant[]>{

    return this.httpClient.get<Restaurant[]>(`${this.baseurl}/getAllRestaurant`);

  }
  getCuisineNames(id : String) : Observable<Cuisine>{

    return this.httpClient.get<Cuisine>(`${this.baseurl}/getCuisineName/${id}`);
  }

  constructor(private httpClient : HttpClient) { }

  getAllDishes(id : String) : Observable<Dish[]>{
    return this.httpClient.get<Dish[]>(`${this.baseurl}/getDishes/${id}`);
  }
  getDishByDishId(dishId:String,res_Id:String) : Observable<Dish>{
    return this.httpClient.get<Dish>(`${this.baseurl}/getDish/${dishId}/${res_Id}`);
  }
  getRestaurantById(res_Id:String) : Observable<Restaurant>{
    return this.httpClient.get<Restaurant>(`${this,this.baseurl}/getRestaurantByResId/${res_Id}`);
  }
  getAllRestaurant() : Observable<Array<Restaurant>>{
    return this.httpClient.get<Array<Restaurant>>(`${this.baseurl}/getAllRestaurant`);
  }
  getRestaurantByName(name:String):Observable<Restaurant>{
    return this.httpClient.get<Restaurant>(`${this.baseurl}/getRestaurantByName/${name}`);
  }
  saveVendor(vendor:Vendor) : Observable<object>{
    return this.httpClient.post(`${this.baseurl}/register`,vendor);
  }
  addRestaurantByVendorId(restaurant:Restaurant,vendorId:String) : Observable<object>{
    return this.httpClient.post(`${this.baseurl}/addRestaurant/${vendorId}`,restaurant);
  }
  getVendorByEmail(email:String) : Observable<Vendor>{
    return this.httpClient.get<Vendor>(`${this.baseurl}/getVendorByEmail/${email}`);
  }
}
