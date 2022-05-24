import {Dish} from "./Dish";
import { Location } from "./Location";

export class Restaurant{

    restaurantId : String = "";
    restaurantVendorID  : String = "";
    restaurantName : String = "";
    restaurantImages : Array<String> = [];
    cuisineIds :  Array<String> = [];
    dishList : Array<Dish>;
    restaurantLocation : Location;


    constructor(restaurantLocation : Location, dishList : Array<Dish>){
        this.restaurantLocation = restaurantLocation;
        this.dishList = dishList;

    }
    

    

}