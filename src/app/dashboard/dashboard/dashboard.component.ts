import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   nom = window.localStorage.getItem("nom");
   role = window.localStorage.getItem("role");
   constructor(private router: Router){}
  ngOnInit(): void {
    const token = window.localStorage.getItem("token");
    const role = window.localStorage.getItem("role");
    
    if(token == null || role == null ){
      alert("ERREUR. VEUILLEZ VOUS IDENTIFIER");
      this.OnLogOut();
    }
  }
   OnLogOut():void{
    window.localStorage.clear();
    this.router.navigate(['/'])
   }

}
