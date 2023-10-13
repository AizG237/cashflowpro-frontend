import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gcmptmedrequest } from '../modele/gcmptmedrequest';

@Injectable({
  providedIn: 'root'
})
export class GcmptmedserviceService {

  constructor(private http: HttpClient) { }
    Modifprofil(gcmptmedrequest : Gcmptmedrequest) {
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
          }),
        }
        console.log("modification profil ok "+gcmptmedrequest.pwd+gcmptmedrequest.telephone+gcmptmedrequest.nom+gcmptmedrequest.prenom+gcmptmedrequest.datenaiss);
        return this.http.post('http://localhost:8080/utilisateur/update/{id}', httpOptions).pipe();
      }
}
