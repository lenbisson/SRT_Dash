import { Routes, RouterModule } from '@angular/router';
import { SrthomeComponent } from './srthome/srthome.component';
import { AuthComponent} from './auth/auth.component';
import { SRT_ROUTES } from './srthome/srt.routes';
import { AUTH_ROUTES } from './auth/auth.routes';


const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  { path: 'srt', component: SrthomeComponent},
  { path: 'srt', component: SrthomeComponent, children: SRT_ROUTES},
  { path: 'auth', component: AuthComponent, children: AUTH_ROUTES },
{ path: 'srt', component: SrthomeComponent},
{ path: 'srt', component: SrthomeComponent, children: SRT_ROUTES},
{ path: 'auth', component: AuthComponent, children: AUTH_ROUTES },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
