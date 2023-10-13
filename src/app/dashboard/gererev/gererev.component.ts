import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gererev',
  templateUrl: './gererev.component.html',
  styleUrls: ['./gererev.component.css']
})
export class GererevComponent implements OnInit {
constructor(private router : Router){}

ngOnInit(){
  const role = window.localStorage.getItem("role")
  if(role !="DIRECTEUR" && role !="RESPONSABLE" && role !="EMPLOYE"){
    alert("ERREUR, VOUS N'AVEZ PAS LE DROIT D'ACCES A CETTE PAGE");
    window.localStorage.clear();
    this.router.navigate(['/']); 
  }
}
}
