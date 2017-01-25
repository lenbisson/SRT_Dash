import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ReportComponent } from './report/report.component';
import { SolicitationTableComponent } from './report/solicitation-table/solicitation-table.component';
import { PredictionService } from './prediction.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReportComponent,
    SolicitationTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [PredictionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
