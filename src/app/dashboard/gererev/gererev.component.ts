import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gererev',
  templateUrl: './gererev.component.html',
  styleUrls: ['./gererev.component.css']
})
export class GererevComponent {
constructor(private router : Router){}
OnAccess():void{
  const role = window.localStorage.getItem("role")
if (role =="CLIENT") {
  alert("VOUS N'ETES PAS AUTORISE A ACCEDER A CETTE PAGE");
  window.localStorage.clear();
  this.router.navigate(['/'])
}
}
}
