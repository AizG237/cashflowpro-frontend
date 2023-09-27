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
import { GereplanepComponent } from './dashboard/gereplanep/gereplanep.component';
import { CmptempComponent } from './dashboard/cmptemp/cmptemp.component';
import { ConnexiontComponent } from './connexiont/connexiont.component';
import{CashfoncComponent} from './dashboard/cashfonc/cashfonc.component';
import{SantefinComponent} from './dashboard/santefin/santefin.component';
//import { GereinvComponent } from './dashboard/gereinv/gereinv.component';


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
    GereplanepComponent,
    CmptempComponent,
    ConnexiontComponent,
    CashfoncComponent,
    SantefinComponent,
    // GereinvComponent
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
