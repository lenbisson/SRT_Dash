import { Routes } from '@angular/router';

import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';

// these routes are children to "/auth"
export const AUTH_ROUTES: Routes = [
  {path: '', redirectTo: 'signup', pathMatch: 'full'},
  {path: 'signup', component: UserregistrationComponent},
  {path: 'login', component: UserloginComponent},
  {path: 'logout', component: UserlogoutComponent}
];
