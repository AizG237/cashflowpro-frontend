import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-santefin',
  templateUrl: './santefin.component.html',
  styleUrls: ['./santefin.component.css']
})
export class SantefinComponent {
constructor(private router: Router){}
OnAccess():void{
  const role = window.localStorage.getItem("role")
  const role2 = window.localStorage.getItem("role")
if (role !="DIRECTEUR" || role2 != "RESPPONSABLE") {
  alert("VOUS N'ETES PAS AUTORISE A ACCEDER A CETTE PAGE");
  window.localStorage.clear();
  this.router.navigate(['/'])
}
}
}
