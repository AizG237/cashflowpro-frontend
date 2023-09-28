import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlanInvest } from '../modele/plan-invest';

@Injectable({
  providedIn: 'root'
})
export class PlanInvestServiceService {

  constructor(private http: HttpClient) { }
  addPlanInvest(planInvest : PlanInvest){
    const httpOptions ={
    headers: new HttpHeaders({
      "Content-type" : "application/json",

    }),
    
  }
  console.log("Le service d'ajout des PI ' retourne  "+planInvest.broker+" "+planInvest.nominvest+"  "+planInvest.nomactif);
  return this.http.post('http://localhost:8080/plan_investissement/add', planInvest, httpOptions).pipe(); 
}
}
