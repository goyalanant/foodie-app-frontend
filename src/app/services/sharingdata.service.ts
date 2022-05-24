import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingdataService {

  // private email=new BehaviorSubject("");
  // userEmail=this.email.asObservable();
  // setEmail(data:string){
  //   this.email.next(data);
  //   alert(data);
  // }

  // private subject = new BehaviorSubject("");
  // name = this.subject.asObservable();
  // setId(data:any){
  //   this.subject.next(data);
  // }

  // private restaurantId = new BehaviorSubject(0);
  // res_Id = this.subject.asObservable();
  // setRestaurantId(id:any){
  //   this.restaurantId.next(id);
  // }

  // private user_Id = new BehaviorSubject(0);
  // userId = this.subject.asObservable();
  // setUserId(id:any){
  //   this.user_Id.next(id);
  // }
  // getId() : Observable<any>{
  //   return this.subject.asObservable();
  // }
  //  data = new BehaviorSubject<String>("dafault message");
  // dataMessage$:any = this.data.asObservable();
  // message:any
  // constructor() { }
  // sendMessage(message:String)
  // {
  //   this.data.next(message);
  //   alert(this.data)
  // }
 
  // setMessage(data: String){

  //  this.message=data;
  // }

  // getMessage()
  // {
  //   return this.message;
  // }
}
