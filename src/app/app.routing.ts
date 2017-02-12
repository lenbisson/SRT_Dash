import { Routes, RouterModule } from '@angular/router';
import { SrthomeComponent } from './srthome/srthome.component';
import { UserloginComponent} from './userlogin/userlogin.component';
import { SRT_ROUTES } from './srthome/srt.routes';


const APP_ROUTES: Routes = [
{ path: 'srt', component: SrthomeComponent},
{ path: 'srt', component: SrthomeComponent, children: SRT_ROUTES},

{ path: '', component: UserloginComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);