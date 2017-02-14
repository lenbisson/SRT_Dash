import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './srthome/header.component';
import { PredictionService } from './prediction.service';
import { FilterComponent } from './report/filter/filter.component';
import { OrderByPipe } from './report/orderby';
import { ReportComponent } from './report/report.component';
import { routing } from './app.routing';
import { TableSortableComponent} from './report/table-sortable/table-sortable.component';
import { SolReportHeaderComponent } from './report/sol-report-header/sol-report-header.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { SrthomeComponent } from './srthome/srthome.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingsComponent } from './settings/settings.component';
import { PreExamComponent } from './pre-exam/pre-exam.component';
import { AgencyService } from './agency.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderByPipe,
    ReportComponent,
    TableSortableComponent,
    FilterComponent,
    SolReportHeaderComponent,
    UserloginComponent,
    UserregistrationComponent,
    SrthomeComponent,
    AnalyticsComponent,
    SettingsComponent,
    PreExamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PredictionService, AgencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
