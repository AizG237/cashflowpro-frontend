import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiemnt',
  templateUrl: './paiemnt.component.html',
  styleUrls: ['./paiemnt.component.css']
})
export class PaiemntComponent implements OnInit{
constructor(private router:Router){}

ngOnInit(){
  const role = window.localStorage.getItem("role")
  if(role !="CLIENT"){
    alert("ERREUR, VOUS N'AVEZ PAS LE DROIT D'ACCES A CETTE PAGE");
    window.localStorage.clear();
    this.router.navigate(['/']); 
  }
}
}
