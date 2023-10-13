import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gcmptjnrequest } from '../modele/gcmptjnrequest';

@Injectable({
  providedIn: 'root'
})
export class GcmptjnserviceService {

  constructor(private http: HttpClient) { }
    Modifprofiljn(gcmptjnrequest : Gcmptjnrequest) {
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
          }),
        }
        console.log("modification profil ok "+gcmptjnrequest.nom+gcmptjnrequest.pays_origine+gcmptjnrequest.telephone+gcmptjnrequest.pwd+gcmptjnrequest.profession+gcmptjnrequest.datenaiss);
        return this.http.post('http://localhost:8080/Client/update/{matricule}', httpOptions).pipe();
      }
}
