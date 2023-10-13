import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prestationrequest } from '../modele/prestationrequest';

@Injectable({
  providedIn: 'root'
})
export class PrestationserviceService {

  constructor(private http: HttpClient) { }
  ajpresta(presta : Prestationrequest){
    const httpOptions ={
      headers: new HttpHeaders({
        "Content-type" : "application/json",
      }),
    }
    console.log("la prestation est ajoutée   ",presta);
    return this.http.post('http://localhost:8080/prestation/add', presta, httpOptions); 
  }
}
