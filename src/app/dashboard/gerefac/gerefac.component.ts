import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Facturequest } from '../../modele/facturequest';
import { FactureserviceService } from '../../service/factureservice.service';

@Component({
  selector: 'app-gerefac',
  templateUrl: './gerefac.component.html',
  styleUrls: ['./gerefac.component.css']
})
export class GerefacComponent implements OnInit {
  // nomsociete: string = '';
  // montant: any = '';
  // date_reception!: Date;
  // delai!: Date;
  factures : Facturequest[]=[];
  facture = new Facturequest();
  constructor(
    private factureService: FactureserviceService,
    private router : Router
  ) {}
  ngOnInit(): void {
    this.OnListFacture()
  }

  OnAccess():void{
    const role = window.localStorage.getItem("role")
    const role2 = window.localStorage.getItem("role")
  if (role !="DIRECTEUR" || role2 != "RESPONSABLE") {
    alert("VOUS N'ETES PAS AUTORISE A ACCEDER A CETTE PAGE");
    window.localStorage.clear();
    this.router.navigate(['/'])
  }
}

  OnRegistFacManuel(): void {
    this.factureService.addFacManuelle(this.facture).subscribe((res: any) => {
      console.log(
        'On enregistre la facture ' +this.facture.nomsociete +'  ' +this.facture.montant
      );
      //  this.facture.reset();
    });
  }
  OnModifFacManuel(): void {
    this.factureService.modifFacManuelle(this.facture).subscribe((res: any) => {
      console.log(
        'On enregistre le facture ' +
          this.facture.nomsociete +
          '  ' +
          this.facture.montant
      );
      //  this.facture.reset();
    });
  }
OnRegistFacAut():void{
  this.factureService.addFacAuto(this.facture).subscribe((res:any) =>{

    console.log(" On enregistre le facture "+ this.facture.nomsociete + "  "+this.facture.montant);
    console.log( " La response est "+ res.token);
  
  })
}
OnModifFacAut(): void {
  this.factureService.modifFacManuelle(this.facture).subscribe((res: any) => {
    console.log(
      'On enregistre le facture ' +
        this.facture.nomsociete +
        '  ' +
        this.facture.montant
    );
    //  this.facture.reset();
    });
  }
OnListFacture():void{
  this.factureService.getListFactureManuelle().subscribe(data =>{
    this.factures = data;
    console.log("Liste des factures",this.factures);
  });
}
}
