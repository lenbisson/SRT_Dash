import { Routes, RouterModule } from '@angular/router';
import { SrthomeComponent } from './srthome/srthome.component';
import { SRT_ROUTES } from './srthome/srt.routes';


const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'srt/auth', pathMatch: 'full'},
  { path: 'srt', component: SrthomeComponent},
  { path: 'srt', component: SrthomeComponent, children: SRT_ROUTES},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
