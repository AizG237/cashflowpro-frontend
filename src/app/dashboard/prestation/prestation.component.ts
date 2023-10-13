import { Component, OnInit } from '@angular/core';
import { Prestationrequest } from '../../modele/prestationrequest';
import { PrestationserviceService } from '../../service/prestationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.css']
})
export class PrestationComponent implements OnInit {
  ajpres = new Prestationrequest();
constructor(private prestationserviceService : PrestationserviceService,private router:Router){}

ngOnInit(){
  const role = window.localStorage.getItem("role")
  if(role !="DIRECTEUR"){
    alert("ERREUR, VOUS N'AVEZ PAS LE DROIT D'ACCES A CETTE PAGE");
    window.localStorage.clear();
    this.router.navigate(['/']); 
  }
}

OnAddPresta():void{
this.prestationserviceService.ajpresta(this.ajpres).subscribe((res:any) =>{
  console.log(" Test new prestation OK"+res);

});

}

OnAccess():void{
  const role = window.localStorage.getItem("role")
  const role2 = window.localStorage.getItem("role")
if (role !="DIRECTEUR") {
  alert("VOUS N'ETES PAS AUTORISE A ACCEDER A CETTE PAGE");
  window.localStorage.clear();
  this.router.navigate(['/'])
}
}
}
