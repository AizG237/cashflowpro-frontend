import { Injectable } from '@angular/core';
import { enviroment } from 'src/assets/enviroment/enviroment.dev';
import{HttpClient, HttpHeaders} from "@angular/common/http"
import { AuthRequest } from '../modele/auth-request';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
    //appURL = enviroment.baseUrl
  constructor(private http : HttpClient) { }
  login(authRequest : AuthRequest){
    

    const httpOptions ={
      headers: new HttpHeaders({
        "Content-type" : "application/json",

      }),
    }
    console.log("Le service d'authentification retourne  "+authRequest.password+authRequest.email);
    return this.http.post('http://localhost:8080/auth/authenticate', authRequest, httpOptions).pipe(); 
  }
}
