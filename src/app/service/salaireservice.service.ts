import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salairerequest } from '../modele/salairerequest';

@Injectable({
  providedIn: 'root'
})
export class SalaireserviceService {

  constructor(private http: HttpClient) { }
  ajoutsal(ajsal : Salairerequest){
    const httpOptions ={
      headers: new HttpHeaders({
        "Content-type" : "application/json",
      }),
    }
    console.log("le salaire est ajouté   "+ajsal.salaire);
    return this.http.post('http://localhost:8080/utilisateur/add', ajsal, httpOptions).pipe(); 
  }
}
