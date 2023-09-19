import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CashflowproTestService {
  readonly  API_URL= "http://localhost:8080"
  readonly ENDPOINT_utilisateurs="/utilisateur"

  constructor(private httpClient: HttpClient) { 

  }
  getUtilisateur(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_utilisateurs)

  }
}
