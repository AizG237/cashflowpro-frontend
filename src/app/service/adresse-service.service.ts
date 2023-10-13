import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdresseRequest } from '../modele/adresse-request';

@Injectable({
  providedIn: 'root'
})
export class AdresseServiceService {
  constructor(private http:HttpClient) { }
  adrressAdd(adresseRequest : AdresseRequest) {
    const token = window.localStorage.getItem("token");
      const httpOptions = {
       
        headers: new HttpHeaders({
          "Content-type" : "application/json",
          Authorization:"Bearer"+token
        }),
      }
      console.log("modification profil ok "+adresseRequest.pays+adresseRequest.ville+adresseRequest.quartier);
      return this.http.post('http://localhost:8080/adresse/add', httpOptions).pipe();
    }
}
