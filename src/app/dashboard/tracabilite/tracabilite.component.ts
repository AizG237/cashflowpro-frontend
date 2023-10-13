import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracabilite',
  templateUrl: './tracabilite.component.html',
  styleUrls: ['./tracabilite.component.css']
})
export class TracabiliteComponent implements OnInit {
  router = new Router()
  ngOnInit(){
    const role = window.localStorage.getItem("role")
    if(role !="DIRECTEUR"){
      alert("ERREUR, VOUS N'AVEZ PAS LE DROIT D'ACCES A CETTE PAGE");
      window.localStorage.clear();
      this.router.navigate(['/']); 
    }
  }

}
