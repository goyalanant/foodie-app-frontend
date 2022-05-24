import { Location } from "./Location";


export class User{
    // [x: string]: any;
    userId:String="";
    email : String="";
    password : String="";
    userName : String="";
    userImage : String="";
    userAddress:Location;
    userPhone:String="";

    constructor(userAddress:Location){
        this.userAddress=userAddress;
    }
    
}