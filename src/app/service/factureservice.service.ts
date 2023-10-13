import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facturequest } from '../modele/facturequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactureserviceService {

  constructor(private http: HttpClient) { }
  addFacManuelle(facturequest : Facturequest) {
    const token = window.localStorage.getItem("token");
      const httpOptions = {
       
        headers: new HttpHeaders({
          "Content-type" : "application/json",
          Authorization:"Bearer "+token
        }),
      }
      console.log("modification profil ok "+facturequest.date_paiement+facturequest.date_reception+facturequest.montant+facturequest.nomsociete+facturequest.delai);
      return this.http.post('http://localhost:8080/facture/add/manuel',facturequest, httpOptions).pipe();
    }

  modifFacManuelle(facturequest : Facturequest) {
    const token = window.localStorage.getItem("token");
      const httpOptions = {
       
        headers: new HttpHeaders({
          "Content-type" : "application/json",
          Authorization:"Bearer"+token
        }),
      }
      console.log("modification profil ok "+facturequest.date_paiement+facturequest.date_reception+facturequest.montant+facturequest.nomsociete+facturequest.delai);
      return this.http.post('http://localhost:8080/facture/update/{id_Facture}', httpOptions).pipe();
    }

    addFacAuto(facturequest : Facturequest) {
    const token = window.localStorage.getItem("token");
      const httpOptions = {
       
        headers: new HttpHeaders({
          "Content-type" : "application/json",
          Authorization:"Bearer"+token
        }),
      }
      console.log("modification profil ok "+facturequest.date_paiement+facturequest.date_reception+facturequest.montant+facturequest.nomsociete+facturequest.delai);
      return this.http.post('http://localhost:8080/facture/add/auto', httpOptions).pipe();
    }

    modifFacAuto(facturequest : Facturequest) {
      const token = window.localStorage.getItem("token");
        const httpOptions = {
         
          headers: new HttpHeaders({
            "Content-type" : "application/json",
            Authorization:"Bearer"+token
          }),
        }
        console.log("modification profil ok "+facturequest.date_paiement+facturequest.date_reception+facturequest.montant+facturequest.nomsociete+facturequest.delai);
        return this.http.post('http://localhost:8080/facture/update/{id_FactureAuto}', httpOptions).pipe();
      }
    getListFactureManuelle(): Observable<Facturequest[]>{
        return this.http.get<Facturequest[]>('http://localhost:8080/facture/getAll');
      }
//       getUsers(): {
//         return this.http.get<any>(this.apiUrl);
//       }
}
