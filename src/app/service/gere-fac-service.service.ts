// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { FactureModel } from '../modele/facture-model';
// import { TokenProviderService } from './token-provider.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class GereFacServiceService {

//   constructor(private http:HttpClient, private tokenService: TokenProviderService) { }

//   addFacManuelle(facture :FactureModel){
//     const token = window.localStorage.getItem("token");
//     const httpOptions={
//     headers: new HttpHeaders({
//       "Content-type" : "application/json",
//       Authorization: 'Bearer '+token,
//     }),
//     }
//     console.log(httpOptions);
//     console.log("Le service d'enregistrement de facture manuelle OK "+ facture.nomsociete+   "   "+facture.delai+"  "+facture.delai);
//     return this.http.post("http://localhost:8080/facture/add/manuel", facture, httpOptions ).pipe();
//   }
// }
