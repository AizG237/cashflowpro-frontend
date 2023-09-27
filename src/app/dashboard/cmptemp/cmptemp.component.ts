import { Component } from '@angular/core';
import { RegistEmp } from 'src/app/modele/regist-emp';
import { CreationEmplService } from 'src/app/service/creation-empl.service';

@Component({
  selector: 'app-cmptemp',
  templateUrl: './cmptemp.component.html',
  styleUrls: ['./cmptemp.component.css']
})
export class CmptempComponent {
  employe = new RegistEmp();
constructor(private creation : CreationEmplService){}

OnCreateEmpl():void{
console.log("Test creation  "+this.employe);
this.creation.newEmploye(this.employe).subscribe((res:any) =>{
  console.log(res);
  window.localStorage.setItem("token", res.token);
console.log("TOKEN OK "+res.token+ " "+res.role);
})


}
}
