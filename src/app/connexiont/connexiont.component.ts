import { Component } from '@angular/core';

import { AuthRequest } from '../modele/auth-request';
import { LoginService } from '../service/login.service';
import { RegistRequest } from '../modele/regist-request';
import { InscriptionService } from '../service/inscription.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-connexiont',
  templateUrl: './connexiont.component.html',
  styleUrls: ['./connexiont.component.css']
})
export class ConnexiontComponent {

  authRequest: AuthRequest = new AuthRequest();
  regist: RegistRequest = new RegistRequest();
  constructor(private authService : LoginService, private insciptionService : InscriptionService, private router :Router){ }
  errorMessage:string = "";
  errorregistMessage:string = "";
  successMessage:string = "";
  successregistMessage:string = "";

  OnSubmit():void{
  
    console.log('test',this.authRequest);
    this.authService.login(this.authRequest)
    .pipe(catchError((error) => {
      console.log('testung error ', error.status, "after errooor")
      if(error.status>400){
        this.errorMessage="compte inexistant"
        this.successMessage=''
        console.log('resres ',error.statusCodeValue)
      }
       return throwError(() => error);
     }) 
    )
    .subscribe((res:any)=>{
      
 console.log('res res ',res);
 this.errorMessage=''
   this.successMessage ="connexion effectuee avec succes";
  window.localStorage.setItem("token", res.token);
  window.localStorage.setItem("nom", res.nom);
  window.localStorage.setItem("role",res.role)
console.log("TOKEN OK "+res.token+ " "+res.role)
switch(res.role){
case 'CLIENT': this.router.navigate(['/dashboard/paiemnt'])
break;
case 'EMPLOYE':this.router.navigate(['/dashboard/gererev'])
break;
case'DIRECTEUR':this.router.navigate(['/dashboard'])
}
    });

  }

  OnRegist():void{
    console.log('test',this.regist);
    this.insciptionService.inscription(this.regist)
    .pipe(catchError((error) => {
      console.log('testung error ', error.statusCodeValue, "after errooor")
      // if(error.statusCodeValue>400){
      //   this.errorregistMessage="ce compte existe déjà"
      //   this.successregistMessage=''
      //   console.log('resres ',error.statusCodeValue)
      // }
       return throwError(() => error);
     }) 
    )
    .subscribe((res:any)=>{
      console.log( "dhbfndhjcdhn " ,res.statusCodeValue);
      if(res.statusCodeValue>400){
        this.errorregistMessage="ce compte existe déjà"
        this.successregistMessage=''
        console.log('resres ',res.statusCodeValue)
      }
      else{
      this.errorregistMessage=''
      this.successregistMessage ="inscription  effectuee avec succes";
      window.localStorage.setItem("token", res.token);
      console.log("TOKEN OK"+res.token)
      this.regist = new RegistRequest();
      // this.router.navigate(['/connexiont'])
}
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
