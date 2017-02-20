import { Routes, RouterModule } from '@angular/router';
import { ReportComponent} from '../report/report.component';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { SettingsComponent } from '../settings/settings.component';
import { PreExamComponent } from '../pre-exam/pre-exam.component';
import { SolicitationDetailComponent } from '../report/solicitation-detail/solicitation-detail.component';




export const SRT_ROUTES: Routes = [
{ path: '', component: ReportComponent },
{ path: 'report', component: ReportComponent },
{ path: 'solicitation/:id', component: SolicitationDetailComponent },
{ path: 'analytics', component: AnalyticsComponent },
{ path: 'settings', component: SettingsComponent },
{ path: 'preexam', component: PreExamComponent },
];

