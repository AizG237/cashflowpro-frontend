import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistEmp } from '../modele/regist-emp';

@Injectable({
  providedIn: 'root'
})
export class CreationEmplService {

  constructor(private http:HttpClient) { }
  newEmploye(employe : RegistEmp){
    const token = window.localStorage.getItem("token")
    const httpOptions ={
      
      headers: new HttpHeaders({
        "Content-type" : "application/json",
        Authorization:"Bearer "+token

      }),
    }
    console.log("Le service EMPLOYE "+employe.matricule+"   "+employe.email+"    "+employe.firstname);
    return this.http.post('http://localhost:8080/auth/register/employe', employe, httpOptions).pipe();
  }

}
