import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlanInvest } from '../modele/plan-invest';
import { TokenProviderService } from './token-provider.service';

@Injectable({
  providedIn: 'root'
})
export class PlanInvestServiceService {

  constructor(private http: HttpClient, private tokenService : TokenProviderService) { }
  addPlanInvest(planInvest : PlanInvest){
    const token = window.localStorage.getItem("token");
  console.log("Getting the token from the local storage ",token)

    const httpOptions ={
    headers: new HttpHeaders({
      "Content-type" : "application/json",
      Authorization:"Bearer "+token,

    }),
    
  }

  console.log(httpOptions,"  ==============     ")
  
  console.log("Le service d'ajout des PI ' retourne  "+planInvest.broker+" "+planInvest.nominvest+"  "+planInvest.nomactif);
  return this.http.post('http://localhost:8080/plan_investissement/add', planInvest, httpOptions).pipe(); 
}
}
