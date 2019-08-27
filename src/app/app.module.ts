import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DetailsComponent } from './details/details.component';
import { GstrComponent } from './gstr/gstr.component';
import { GstrfComponent } from './gstrf/gstrf.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    DetailsComponent,
    GstrComponent,
    GstrfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
