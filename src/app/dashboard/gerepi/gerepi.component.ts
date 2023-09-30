import { Component } from '@angular/core';
import { PlanInvest } from 'src/app/modele/plan-invest';
import { PlanInvestServiceService } from 'src/app/service/plan-invest-service.service';
import { TokenProviderService } from 'src/app/service/token-provider.service';

@Component({
  selector: 'app-gerepi',
  templateUrl: './gerepi.component.html',
  styleUrls: ['./gerepi.component.css']
})
export class GerepiComponent {
  invest = new PlanInvest();
constructor(private planInvestService : PlanInvestServiceService){}
OnAddPlanInvest():void{
this.planInvestService.addPlanInvest(this.invest).subscribe((res:any) =>{
  console.log(" Test new PLAN INVESTISSEMENT OK"+res);

});

}

}
