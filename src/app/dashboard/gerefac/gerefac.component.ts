import { Component } from '@angular/core';
import { FactureModel } from 'src/app/modele/facture-model';
import { GereFacServiceService } from 'src/app/service/gere-fac-service.service';

@Component({
  selector: 'app-gerefac',
  templateUrl: './gerefac.component.html',
  styleUrls: ['./gerefac.component.css']
})
export class GerefacComponent {
facture = new FactureModel();
constructor(private factureService: GereFacServiceService){}
OnRegistFacManuel():void{
  this.factureService.addFacManuelle(this.facture).subscribe((res:any) =>{

    console.log(" On enregistre le facture "+ this.facture.nomsociete + "  "+this.facture.montant);
    console.log( " La response est "+ res.token);

  })


}


}
