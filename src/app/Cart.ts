import { CartItem } from "./cartItem";

export class Cart{
    cartId:String="";
    cartItems:Array<CartItem>;

    constructor(cartItems:Array<CartItem>){
        this.cartItems=cartItems;
    }
}