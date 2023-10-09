import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistEmp } from '../modele/regist-emp';

@Injectable({
  providedIn: 'root'
})
export class CreationEmplService {

  constructor(private http:HttpClient) { }
  token = window.localStorage.getItem("token");
  newEmploye(employe : RegistEmp){
    const httpOptions ={
      headers: new HttpHeaders({
        "Content-type" : "application/json",
        Authorization:"Bearer"+this.token

      }),
    }
    console.log("Le service d'inscription fonctionne  "+employe.matricule+"   "+employe.email+"    "+employe.firstname+" LE TOKEN "+this.token);
    return this.http.post('http://localhost:8080/auth/register/employe', employe, httpOptions).pipe();
  }
}
