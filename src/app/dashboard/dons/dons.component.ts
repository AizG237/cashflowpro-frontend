import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { DonserviceService } from '../../service/donservice.service';
import { Donrequest } from '../../modele/donrequest';

@Component({
  selector: 'app-dons',
  templateUrl: './dons.component.html',
  styleUrls: ['./dons.component.css']
})
export class DonsComponent {
    adon = new Donrequest();
  constructor(private donserviceService : DonserviceService,private router: Router){}  
  ngOnInit(): void{
 }
  errorMessage:string = "";
  successMessage:string = "";
  OnAddon():void{
  
    // console.log(this.adon);
    this.donserviceService.addDons(this.adon)
    .pipe(catchError((error) => {
      console.log('testung error ', error)
       return throwError(() => error);
     }) 
   )
   .subscribe((res: any) => {
    console.log('res res ', res)
      this.successMessage ="Don effectuee avec succes";
      this.adon = new Donrequest();
    this.router.navigate(['/dashboard/don'])
    }
    );
  }
  

// OnAccess():void{
//   const role = window.localStorage.getItem("role")
//   const role2 = window.localStorage.getItem("role")
// if (role !="CLIENT") {
//   alert("VOUS N'ETES PAS AUTORISE A ACCEDER A CETTE PAGE");
//   window.localStorage.clear();
//   this.router.navigate(['/'])
//     }
//   }
}
