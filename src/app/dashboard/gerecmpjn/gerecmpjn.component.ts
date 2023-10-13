import { Component, OnInit } from '@angular/core';
import { Gcmptjnrequest } from '../../modele/gcmptjnrequest';
import { GcmptjnserviceService } from '../../service/gcmptjnservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerecmpjn',
  templateUrl: './gerecmpjn.component.html',
  styleUrls: ['./gerecmpjn.component.css']
})
export class GerecmpjnComponent implements OnInit{

  modifpro = new Gcmptjnrequest();
constructor(private gcmptjnserviceService : GcmptjnserviceService){}  
router = new Router()
ngOnInit(){
  const role = window.localStorage.getItem("role")
  if(role !="CLIENT"){
    alert("ERREUR, VOUS N'AVEZ PAS LE DROIT D'ACCES A CETTE PAGE");
    window.localStorage.clear();
    this.router.navigate(['/']); 
  }
}

Onmodifprofilcli(){

  console.log(this.modifpro);
  this.gcmptjnserviceService.Modifprofiljn(this.modifpro).subscribe((res: any) => {
     console.log(res);
    // window.localStorage.setItem("token");
    // console.log("ajout post effectuee avec succes " + res.token+ " Et le role est ")
  });
}
}
