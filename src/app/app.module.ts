import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './srthome/header.component';
import { PredictionService } from './prediction.service';
import { FilterComponent } from './report/filter/filter.component';
import { OrderByPipe } from './report/orderby';
import { ReportComponent } from './report/report.component';
import { routing } from './app.routing';
import { TableSortableComponent } from './report/table-sortable/table-sortable.component';
import { SolReportHeaderComponent } from './report/sol-report-header/sol-report-header.component';
import { SrthomeComponent } from './srthome/srthome.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingsComponent } from './settings/settings.component';
import { PreExamComponent } from './pre-exam/pre-exam.component';
import { AgencyService } from './agency.service';
import { SolicitationDetailComponent } from './report/solicitation-detail/solicitation-detail.component';
import { AuthComponent } from './auth/auth.component';
import { UserloginComponent } from './auth/userlogin/userlogin.component';
import { UserregistrationComponent } from './auth/userregistration/userregistration.component';
import { UserlogoutComponent } from './auth/userlogout/userlogout.component';
import { AuthService } from './auth/auth.service';


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
    UserlogoutComponent,
    AuthComponent,
    SrthomeComponent,
    AnalyticsComponent,
    SettingsComponent,
    PreExamComponent,
    SolicitationDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [PredictionService, AgencyService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
