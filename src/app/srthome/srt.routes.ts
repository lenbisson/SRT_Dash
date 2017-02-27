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
{ path: 'report', component: ReportComponent },
{ path: 'solicitation/:id', component: SolicitationDetailComponent, children: SOL_ROUTES },
{ path: 'auth', component: AuthComponent },
{ path: 'analytics', component: AnalyticsComponent },
{ path: 'settings', component: SettingsComponent },
{ path: 'preexam', component: PreExamComponent },
];
