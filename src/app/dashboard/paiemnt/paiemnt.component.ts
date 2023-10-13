import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiemnt',
  templateUrl: './paiemnt.component.html',
  styleUrls: ['./paiemnt.component.css']
})
export class PaiemntComponent {
constructor(private router:Router){}

OnAccess():void{
  const role = window.localStorage.getItem("role")
  const role2 = window.localStorage.getItem("role")
if (role !="CLIENT") {
  alert("VOUS N'ETES PAS AUTORISE A ACCEDER A CETTE PAGE");
  window.localStorage.clear();
  this.router.navigate(['/'])
}
}
}
