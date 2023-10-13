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
import { DonsComponent } from './dashboard/dons/dons.component';
import { PaiemntComponent } from './dashboard/paiemnt/paiemnt.component';
import { GerecmpjnComponent } from './dashboard/gerecmpjn/gerecmpjn.component';
import { GerecmpmdComponent } from './dashboard/gerecmpmd/gerecmpmd.component';
import { TracabiliteComponent } from './dashboard/tracabilite/tracabilite.component';
import { PrestationComponent } from './dashboard/prestation/prestation.component';



const routes: Routes = [
  {path: 'connexiont', component : ConnexiontComponent},
  {path:'' ,component : ConnexiontComponent},
  {path:'header' ,component : HeaderComponent},
  {path:'gerefac' ,component : GerefacComponent},
  {path:'gerepi' ,component : GerepiComponent},
  {path:'gererev' ,component : GererevComponent},
  {path:'geresal' ,component : GeresalComponent},
  {path:'gereinv' ,component : GereinvComponent},
  {path:'cmptemp' ,component : CmptempComponent},
  {path:'cashfonc',component: CashfoncComponent},
  {path:'santefin',component: SantefinComponent},
  {path:'don',component: DonsComponent},
  {path:'paiemnt',component: PaiemntComponent},
  {path:'cmptcli',component: GerecmpjnComponent},
  {path:'cmptemplo',component: GerecmpmdComponent},

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
  {path:'don',component: DonsComponent},
  {path:'paiemnt',component: PaiemntComponent},
  {path:'cmptcli',component: GerecmpjnComponent},
  {path:'cmptemplo',component: GerecmpmdComponent},
  {path:'tracabilite',component: TracabiliteComponent},
  {path:'prestation',component: PrestationComponent},

 ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
