export class Location{
    street : String="";
    landmark : String="";
    state : String="";
    city : String="";
    zipcode : String="";
    
    constructor(street:String,landmark:String,state:String,city:String,zipcode:String){
        this.street=street;
        this.landmark=landmark;
        this.state=state;
        this.city=city;
        this.zipcode=zipcode;
    }
}