import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private token: TokenService, private route: Router){}
nom = this.token.getNom();
role = this.token.getRole();

OnLogout():void{
  this.token.Clear();
  this.route.navigate(['/']);
}

}
