import { Component } from '@angular/core';

import { AuthRequest } from '../modele/auth-request';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-connexiont',
  templateUrl: './connexiont.component.html',
  styleUrls: ['./connexiont.component.css']
})
export class ConnexiontComponent {

  authRequest: AuthRequest = new AuthRequest();
  constructor(private authService : LoginService){ }

  OnSubmit():void{
    console.log(this.authRequest);
    this.authService.login(this.authRequest).subscribe((res:any)=>{
      console.log(res);
window.localStorage.setItem("token", res.token);
console.log("TOKEN OK"+res.token)

    });

  }

}
