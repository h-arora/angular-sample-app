import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MarcoPoloProblemComponent } from './components/marco-polo-problem/marco-polo-problem.component';
import { InvoiceProcessorComponent } from './components/invoice-processor/invoice-processor.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcoPoloProblemComponent,
    InvoiceProcessorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
