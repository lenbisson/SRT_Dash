import { RouterModule, Routes } from '@angular/router';

import { ReportComponent } from '../report/report.component';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { SettingsComponent } from '../settings/settings.component';
import { PreExamComponent } from '../pre-exam/pre-exam.component';
import { SolicitationDetailComponent } from '../report/solicitation-detail/solicitation-detail.component';
import { SOL_ROUTES } from '../report/solicitation-detail/solicitation.routes';
import { AuthComponent } from '../auth/auth.component';



export const SRT_ROUTES: Routes = [
{ path: '', component: ReportComponent },
{ path: 'report', component: ReportComponent }, // shows the table report for solicitations
{ path: 'solicitation/:id', component: SolicitationDetailComponent, children: SOL_ROUTES }, // detail page for solicitation, manual review happens here
{ path: 'auth', component: AuthComponent }, // login and registration
{ path: 'analytics', component: AnalyticsComponent }, // will show analytics for solicitations
{ path: 'settings', component: SettingsComponent }, // user profile information and password reset
{ path: 'preexam', component: PreExamComponent }, // future page to prescreen solicitation prior to posting on fbo.gov
];
