import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gcmptmedrequest } from 'src/app/modele/gcmptmedrequest';
import { GcmptmedserviceService } from 'src/app/service/gcmptmedservice.service';

@Component({
  selector: 'app-gerecmpmd',
  templateUrl: './gerecmpmd.component.html',
  styleUrls: ['./gerecmpmd.component.css']
})
export class GerecmpmdComponent implements OnInit {
  
  modifpro = new Gcmptmedrequest();
constructor(private gcmptmedserviceService : GcmptmedserviceService){} 
router = new Router()
ngOnInit(){
  const role = window.localStorage.getItem("role")
  if(role !="DIRECTEUR" && role !="RESPONSABLE" && role !="EMPLOYE"){
    alert("ERREUR, VOUS N'AVEZ PAS LE DROIT D'ACCES A CETTE PAGE");
    window.localStorage.clear();
    this.router.navigate(['/']); 
  }
} 

Onmodifprofilempll(){

  console.log(this.modifpro);
  this.gcmptmedserviceService.Modifprofil(this.modifpro).subscribe((res: any) => {
     console.log(res);
    // window.localStorage.setItem("token");
    // console.log("ajout post effectuee avec succes " + res.token+ " Et le role est ")
  });
}
}
