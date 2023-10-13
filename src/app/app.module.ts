import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './authComponent/inscription/inscription.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { GererevComponent } from './dashboard/gererev/gererev.component';
import { GeresalComponent } from './dashboard/geresal/geresal.component';
import { GerefacComponent } from './dashboard/gerefac/gerefac.component';
import { GerepiComponent } from './dashboard/gerepi/gerepi.component';
import { CmptempComponent } from './dashboard/cmptemp/cmptemp.component';
import { ConnexiontComponent } from './connexiont/connexiont.component';
import{CashfoncComponent} from './dashboard/cashfonc/cashfonc.component';
import{SantefinComponent} from './dashboard/santefin/santefin.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { GereinvComponent } from './dashboard/gereinv/gereinv.component';
import { GerecmpjnComponent } from './dashboard/gerecmpjn/gerecmpjn.component';
import { GerecmpmdComponent } from './dashboard/gerecmpmd/gerecmpmd.component';
import { DonsComponent } from './dashboard/dons/dons.component';
import { PaiemntComponent } from './dashboard/paiemnt/paiemnt.component';
import { TracabiliteComponent } from './dashboard/tracabilite/tracabilite.component';
import { PrestationComponent } from './dashboard/prestation/prestation.component';
import { MychartComponent } from './dashboard/mychart/mychart.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    HeaderComponent,
    FooterComponent,
    GererevComponent,
    GeresalComponent,
    GerefacComponent,
    GerepiComponent,
    CmptempComponent,
    ConnexiontComponent,
    CashfoncComponent,
    SantefinComponent,
    DashboardComponent,
    GereinvComponent,
    GerecmpjnComponent,
    GerecmpmdComponent,
    DonsComponent,
    PaiemntComponent,
    TracabiliteComponent,
    PrestationComponent,
    MychartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
