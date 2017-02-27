import { Routes, RouterModule } from '@angular/router';
import { SolicitationDetailComponent } from './solicitation-detail.component';
import { ManualReviewComponent } from './manual-review.component';
import { RedReviewComponent } from './red-review.component';
import { GreenReviewComponent } from './green-review.component';




export const SOL_ROUTES: Routes = [
{ path: '', component: SolicitationDetailComponent },
{ path: 'review', component: ManualReviewComponent },
{ path: 'review/red', component: RedReviewComponent},
{ path: 'review/green', component: GreenReviewComponent }
];

