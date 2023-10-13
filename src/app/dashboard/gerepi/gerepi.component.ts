import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlanInvest } from '../../modele/plan-invest';
import { PlanInvestServiceService } from '../../service/plan-invest-service.service';
// import { TokenProviderService } from 'src/app/service/token-provider.service';

@Component({
  selector: 'app-gerepi',
  templateUrl: './gerepi.component.html',
  styleUrls: ['./gerepi.component.css']
})
export class GerepiComponent {
  invest = new PlanInvest();
constructor(private planInvestService : PlanInvestServiceService, private router:Router){}
OnAddPlanInvest():void{
this.planInvestService.addPlanInvest(this.invest).subscribe((res:any) =>{
  console.log(" Test new PLAN INVESTISSEMENT OK"+res);

});

}
OnAccess():void{
  const role = window.localStorage.getItem("role")
  const role2 = window.localStorage.getItem("role")
if (role !="DIRECTEUR" || role2 != "RESPPONSABLE") {
  alert("VOUS N'ETES PAS AUTORISE A ACCEDER A CETTE PAGE");
  window.localStorage.clear();
  this.router.navigate(['/'])
}
}

}
