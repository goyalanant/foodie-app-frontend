import { Dish } from "./Dish";

export class CartItem{
    dish : Dish;
    dishQuantity : number=0;
    restaurantId : String="";
    constructor(dish:Dish){
        this.dish=dish;
        // this.dishQuantity=dishQuantity;
        // this.restaurantId=restaurantId;
    }
    // public setDish(dish:Dish){
    //   this.dish=dish;
    // }
    // public setRestaurantId(res_Id:String){
    //     this.restaurantId=res_Id;
    // }
    // public setDishQuantity(dishQuantity:number){
    //     this.dishQuantity=dishQuantity;
        
    // }
    // public getDishQuantity():number{
    //     return this.dishQuantity;
    // }
    // public getDish():Dish{
    //     return this.dish;
    // }
}