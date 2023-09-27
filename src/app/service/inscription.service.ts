import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistRequest } from '../modele/regist-request';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) { }
  inscription(registRequest : RegistRequest){
    const httpOptions ={
      headers: new HttpHeaders({
        "Content-type" : "application/json",

      }),
    }
    console.log("Le service d'inscription fonctionne  "+registRequest.password+registRequest.email);
    return this.http.post('http://localhost:8080/auth/register/client', registRequest, httpOptions).pipe(); 
  }
  inscriptionE(registRequest : RegistRequest){
    const httpOptions ={
      headers: new HttpHeaders({
        "Content-type" : "application/json",

      }),
    }
    console.log("Le service d'inscription fonctionne  "+registRequest.password+registRequest.email);
    return this.http.post('http://localhost:8080/auth/register/employe', registRequest, httpOptions).pipe(); 
  }

}
