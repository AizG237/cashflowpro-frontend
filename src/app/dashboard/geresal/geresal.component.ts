import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Salairerequest } from '../../modele/salairerequest';
import { SalaireserviceService } from '../../service/salaireservice.service';

@Component({
  selector: 'app-geresal',
  templateUrl: './geresal.component.html',
  styleUrls: ['./geresal.component.css']
})
export class GeresalComponent {
  adsal: Salairerequest = new Salairerequest();
constructor(private ajoutsalservice : SalaireserviceService ,private router : Router){}
Onaddsal():void{
  console.log('test',this.adsal);
  this.ajoutsalservice.ajoutsal(this.adsal).subscribe((res:any)=>{
    console.log(res);
window.localStorage.setItem("token", res.token);
console.log("TOKEN OK"+res.token)

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
