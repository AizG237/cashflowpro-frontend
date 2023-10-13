import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Donrequest } from '../modele/donrequest';

@Injectable({
  providedIn: 'root'
})
export class DonserviceService {

  constructor(private http: HttpClient) { }
  addDons(donrequest : Donrequest) {
    const token = window.localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type" : "application/json",
         Authorization:"Bearer "+token,
      }),
      }
      console.log("don envoyé avec success ",donrequest);
      return this.http.post('http://localhost:8080/transaction/add',donrequest, httpOptions);
    }
}
