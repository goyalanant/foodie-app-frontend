import { Location } from "./Location";

export class Vendor{
    vendorId : String="";
    vendorEmail:String="";
    vendorName:String="";
    vendorPhone:String="";
    vendorImage:String=""
    vendorAddress:Location;
    restaurantId:String="";

    constructor(vendorAddress:Location){
        this.vendorAddress=vendorAddress;
    }
}