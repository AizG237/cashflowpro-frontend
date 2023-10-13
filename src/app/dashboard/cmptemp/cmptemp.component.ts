import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdresseRequest } from 'src/app/modele/adresse-request';
import { RegistEmp } from 'src/app/modele/regist-emp';
import { AdresseServiceService } from 'src/app/service/adresse-service.service';
import { CreationEmplService } from 'src/app/service/creation-empl.service';

@Component({
  selector: 'app-cmptemp',
  templateUrl: './cmptemp.component.html',
  styleUrls: ['./cmptemp.component.css']
})
export class CmptempComponent {
  employe = new RegistEmp();
  addr = new AdresseRequest();
constructor(private creation : CreationEmplService,private adresseServiceService : AdresseServiceService, private router :  Router){}
  

ngOnInit(){
  const role = window.localStorage.getItem("role")
  if(role !="DIRECTEUR"){
    alert("ERREUR, VOUS N'AVEZ PAS LE DROIT D'ACCES A CETTE PAGE");
    window.localStorage.clear();
    this.router.navigate(['/']); 
  }
}
      OnCreateEmpl():void{
  console.log("Test creation  "+this.employe);
  this.creation.newEmploye(this.employe).subscribe((res:any) =>{
    console.log(res);
    //window.localStorage.setItem("token", res.token);
  //console.log("TOKEN OK "+res.token+ " "+res.role);
  console.log("EMPLOYE "+this.employe.email+" "+this.employe.password+" "+this.employe.datenaiss+" "+this.employe.firstname+" "+this.employe.lastname+" "+this.employe.matricule)
 // this.OnAdress()
  })
  }

  
  OnAdress():void{
    console.log("Test creation  "+this.addr);
    this.adresseServiceService.adrressAdd(this.addr).subscribe((res:any) =>{
      console.log(res);
      window.localStorage.setItem("token", res.token);
    console.log("TOKEN OK "+res.token+ " "+res.role);
    })
    }
}
