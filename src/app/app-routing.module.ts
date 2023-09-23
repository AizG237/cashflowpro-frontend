import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './authComponent/inscription/inscription.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { GerefacComponent } from './dashboard/gerefac/gerefac.component';
import { GerepiComponent } from './dashboard/gerepi/gerepi.component';
import { GereplanepComponent } from './dashboard/gereplanep/gereplanep.component';
import { GererevComponent } from './dashboard/gererev/gererev.component';
import { GeresalComponent } from './dashboard/geresal/geresal.component';
import { CmptempComponent } from './dashboard/cmptemp/cmptemp.component';
import { FormsModule } from '@angular/forms';
import { ConnexiontComponent } from './connexiont/connexiont.component';


const routes: Routes = [
  {path: 'connexiont', component : ConnexiontComponent},
  {path:'' ,component : ConnexiontComponent},
  {path:'header' ,component : HeaderComponent},
  {path:'gerefac' ,component : GerefacComponent},
  {path:'gerepi' ,component : GerepiComponent},
  {path:'gereplanep' ,component : GereplanepComponent},
  {path:'gererev' ,component : GererevComponent},
  {path:'geresal' ,component : GeresalComponent},
  {path:'cmptemp' ,component : CmptempComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
