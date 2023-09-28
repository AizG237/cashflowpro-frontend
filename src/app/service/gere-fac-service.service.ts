import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FactureModel } from '../modele/facture-model';

@Injectable({
  providedIn: 'root'
})
export class GereFacServiceService {

  constructor(private http:HttpClient) { }

  addFacManuelle(facture :FactureModel){
    const httpOptions={
    headers: new HttpHeaders({
      "Content-type" : "application/json"
    }),
    }
    console.log("Le service d'enregistrement de facture manuelle OK "+ facture.nomsociete+   "   "+facture.delai);
    return this.http.post("http://localhost/facture/add/manuel", facture, httpOptions ).pipe();
  }
}
