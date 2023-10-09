import { Component } from '@angular/core';

import { AuthRequest } from '../modele/auth-request';
import { LoginService } from '../service/login.service';
import { RegistRequest } from '../modele/regist-request';
import { InscriptionService } from '../service/inscription.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-connexiont',
  templateUrl: './connexiont.component.html',
  styleUrls: ['./connexiont.component.css']
})
export class ConnexiontComponent {

  authRequest: AuthRequest = new AuthRequest();
  regist: RegistRequest = new RegistRequest();
  constructor(private authService : LoginService, private insciptionService : InscriptionService, private router :Router){ }

  OnSubmit():void{
    console.log('test',this.authRequest);
    this.authService.login(this.authRequest).subscribe((res:any)=>{
      console.log(res);
  window.localStorage.setItem("token", res.token);
  window.localStorage.setItem("role", res.role);
  window.localStorage.setItem("nom", res.nom);

console.log("TOKEN OK "+res.token+ " "+res.role+ " "+res.nom)
switch(res.role){
case 'CLIENT': this.router.navigate(['/dashboard'])
break;
case 'EMPLOYE':this.router.navigate(['/gererev'])
break;



}
    });

    

  }

  OnRegist():void{
    console.log('test',this.regist);
    this.insciptionService.inscription(this.regist).subscribe((res:any)=>{
      console.log(res);
  window.localStorage.setItem("token", res.token);
console.log("TOKEN OK"+res.token)

    });

  }

  loginForm = new FormGroup({

    email: new FormControl('',
    [
      Validators.email,
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
    ]
    ),

    password: new FormControl('',
    [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      //Validators.pattern('())
    ]),
  });

}
