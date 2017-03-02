import { Routes, RouterModule } from '@angular/router';
import { SolicitationDetailComponent } from './solicitation-detail.component';
import { ManualReviewComponent } from './manual-review.component';
import { RedReviewComponent } from './red-review.component';
import { GreenReviewComponent } from './green-review.component';

export const SOL_ROUTES: Routes = [
{ path: '', component: SolicitationDetailComponent },
{ path: 'review', component: ManualReviewComponent }, // page with 5 review questions
{ path: 'review/red', component: RedReviewComponent}, // red result for solicitaiton
{ path: 'review/green', component: GreenReviewComponent } // green result for solicitation
];
