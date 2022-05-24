import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8085/api/v1/users";
  
  
  constructor(private http : HttpClient) { }

  generateToken(cred : any){

    return this.http.post(`${this.url}/login`,cred);

   }

  loginUser(token : any){
    +
    localStorage.setItem("token",token);
    return true;

  }

  isLoggedIn(){
    
    let token = localStorage.getItem('token');
    
    
    if(token == '' || token == undefined || token == null)
      return false;

    
    return true;
  }

  logOut(){

    localStorage.removeItem('userId')
    localStorage.removeItem('email')
    localStorage.removeItem('token');
    
    return true;

  }

  getToken()
  {
    return localStorage.getItem('token');
  }
}
