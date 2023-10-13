import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cashfonc',
  templateUrl: './cashfonc.component.html',
  styleUrls: ['./cashfonc.component.css']
})
export class CashfoncComponent implements OnInit {
  router = new Router()
  ngOnInit(){
    const role = window.localStorage.getItem("role")
    if(role !="DIRECTEUR" && role !="RESPONSABLE"){
      alert("ERREUR, VOUS N'AVEZ PAS LE DROIT D'ACCES A CETTE PAGE");
      window.localStorage.clear();
      this.router.navigate(['/']); 
    }
  }
}
