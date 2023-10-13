import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlotlyService } from '../../service/plotly.service';
import { MarketStackService } from 'src/app/service/market-stack.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-santefin',
  templateUrl: './santefin.component.html', 
  styleUrls: ['./santefin.component.css']
})
export class SantefinComponent {
constructor(private router: Router, private plot: PlotlyService, private marketData: MarketStackService){}
 x:string[] = [];
 y:number[] = [];
// OnAccess():void{
//   const role = window.localStorage.getItem("role")
//   const role2 = window.localStorage.getItem("role")
// if (role !="DIRECTEUR" || role2 != "RESPPONSABLE") {
//   alert("VOUS N'ETES PAS AUTORISE A ACCEDER A CETTE PAGE");
//   window.localStorage.clear();
//   this.router.navigate(['/'])
// }
// }
ngOnInit(){
  this.onStreamData();
  let x:string[] = ["janv","fev","mars"];
  let y:number[] = [1,2,3,4,5];
  this.plot.plotLine("Line Plot","plot",x,y);
  const role = window.localStorage.getItem("role")
  if(role !="DIRECTEUR" && role !="RESPONSABLE"){
    alert("ERREUR, VOUS N'AVEZ PAS L'ACCES A CETTE PAGE");
    window.localStorage.clear();
    this.router.navigate(['/']); 
  }
}

onStreamData():void{
this.marketData.onGetData().pipe(catchError((error) => {
  console.log('testing Data error ', error.statusCodeValue, "after errooor")
  
   return throwError(() => error);
 }) ).subscribe(data=>{
  console.log("Les donnees de MarketStack sont  ",data)
  
 })

}

}
