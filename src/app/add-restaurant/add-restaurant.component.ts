import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Dish } from '../Dish';
import { Location } from '../Location';
import { Restaurant } from '../Restaurant';
import { VendorServiceService } from '../services/vendor-service.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  cred = {
    email : '',
    name : '',
    phoneNo : '',
    image : '',
    street : '',
    city : '',
    landmark : '',
    zipcode : '',
    state : ''
  }
  credentials = {
    resName : '',
    resImage : '',
    street : '',
    city : '',
    landmark : '',
    zipcode : '',
    state : ''
  }

  cuisines = new FormControl();

  cuisineList: string[] = ['North Indian', 'South Indian', 'Italian', 'Chineese', 'Rajasthani', 'Punjabi'];

    

  // dishobj : Dish = new Dish();
  constructor(private vendorService:VendorServiceService) { }

  url="assets/image.png";
  onselectFile(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
  ngOnInit(): void {
  }

  // restaurantLocation!: Location;
  // // dishList!: Array<Dish>;
  // restaurantobj : Restaurant= new Restaurant(this.restaurantLocation,this.dishList);
  // restaurantLocation!: Location;
  // // dishList!: Array<Dish>;
  // restaurantobj : Restaurant= new Restaurant(this.restaurantLocation,this.dishList);
  vendorAddress!: Location;
  vendor:Vendor=new Vendor(this.vendorAddress)
  registerNow(){

    this.vendor.vendorEmail=this.cred.email;
    this.vendor.vendorName=this.cred.name;
    this.vendor.vendorPhone=this.cred.phoneNo;
    this.vendor.vendorAddress=new Location(this.cred.street,this.cred.landmark,this.cred.state,this.cred.city,this.cred.zipcode)
    localStorage.setItem("vendorEmail",this.cred.email);
    this.vendorService.saveVendor(this.vendor).subscribe(data=>{
      
    },error=>{
      console.log(error);
    })
  }
  vendorEmail:any;
  dishList!: Array<Dish>;
  restaurantLocation!: Location;
  restaurant: Restaurant=new Restaurant(this.restaurantLocation,this.dishList);
  vendor1!: Vendor;
  vendorId:String="";
  saveNow(){
    
    this.restaurant.restaurantName=this.credentials.resName;
    this.restaurant.restaurantImages[0]=this.url;
    this.restaurant.restaurantLocation=new Location(this.credentials.street,this.credentials.landmark,this.credentials.state,this.credentials.city,this.credentials.zipcode)
    
    this.vendorEmail=localStorage.getItem('vendorEmail');
    console.log(this.vendorEmail)
    this.vendorService.getVendorByEmail(this.vendorEmail).subscribe(data=>{
      this.vendor1=data;
      this.vendorId=this.vendor1.vendorId;
      console.log(this.vendor1);
      console.log(this.vendorId);
    },error=>{
      console.log(error);
    })
    // console.log(this.restaurant)
    this.addRestaurantComponent();
    
  }

  addRestaurantComponent(){

    console.log(this.restaurant);
    this.vendorService.addRestaurantByVendorId(this.restaurant,this.vendorId).subscribe(data=>{
      
    },error=>{
      console.log(error);
    })
  }
  saveDish(){

  }
}
