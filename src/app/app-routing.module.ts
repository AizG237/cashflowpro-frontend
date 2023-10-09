import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './authComponent/inscription/inscription.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { GerefacComponent } from './dashboard/gerefac/gerefac.component';
import { GerepiComponent } from './dashboard/gerepi/gerepi.component';
import { GererevComponent } from './dashboard/gererev/gererev.component';
import { GeresalComponent } from './dashboard/geresal/geresal.component';
import { CmptempComponent } from './dashboard/cmptemp/cmptemp.component';
import { FormsModule } from '@angular/forms';
import { ConnexiontComponent } from './connexiont/connexiont.component';
import{CashfoncComponent} from './dashboard/cashfonc/cashfonc.component';
import{SantefinComponent} from './dashboard/santefin/santefin.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { GereinvComponent } from './dashboard/gereinv/gereinv.component';
import { PaiemntComponent } from './dashboard/paiemnt/paiemnt.component';
import { DonsComponent } from './dashboard/dons/dons.component';


const routes: Routes = [
   {path: 'connexion', component : ConnexiontComponent},
   {path: '', component : ConnexiontComponent},

  // {path:'' ,component : ConnexiontComponent},
  // {path:'header' ,component : HeaderComponent},
  // {path:'gerefac' ,component : GerefacComponent},
  // {path:'gerepi' ,component : GerepiComponent},
  // {path:'gererev' ,component : GererevComponent},
  // {path:'geresal' ,component : GeresalComponent},
  // {path:'gereinv' ,component : GereinvComponent},
  // {path:'cmptemp' ,component : CmptempComponent},
  // {path:'cashfonc',component: CashfoncComponent},
  // {path:'santefin',component: SantefinComponent},
  {path:'don',component: DonsComponent},

  {path:'dashboard',component: DashboardComponent,
 children:[
  {path:'' ,component : SantefinComponent},
  {path:'gerefac' ,component : GerefacComponent},
  {path:'gereinv' ,component : GereinvComponent},
  {path:'gerepi' ,component : GerepiComponent},
  {path:'gererev' ,component : GererevComponent},
  {path:'geresal' ,component : GeresalComponent},
  {path:'cmptemp' ,component : CmptempComponent},
  {path:'cashfonc',component: CashfoncComponent},
  {path:'santefin',component: SantefinComponent},
  {path:'paiement',component: PaiemntComponent},
  {path:'don',component: DonsComponent},
 ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
