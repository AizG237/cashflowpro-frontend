import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gereinv',
  templateUrl: './gereinv.component.html',
  styleUrls: ['./gereinv.component.css']
})
export class GereinvComponent implements OnInit {
constructor(private router: Router){}
ngOnInit(){
  const role = window.localStorage.getItem("role")
  if(role !="DIRECTEUR" && role !="RESPONSABLE" && role !="EMPLOYE"){
    alert("ERREUR, VOUS N'AVEZ PAS LE DROIT D'ACCES A CETTE PAGE");
    window.localStorage.clear();
    this.router.navigate(['/']); 
  }
}
}
