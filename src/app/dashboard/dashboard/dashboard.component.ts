import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
   nom = window.localStorage.getItem("nom");
   role = window.localStorage.getItem("role");
   constructor(private router: Router){}
   OnLogOut():void{
    window.localStorage.clear();
    this.router.navigate(['/'])

   }

}
