//Module: SRTHeaderComponent
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { ReportComponent } from '../report/report.component';
import { Currentuser } from '../shared/currentuser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private firstName = "";

  constructor(private authService: AuthService,
              private router: Router,
              private user: UserService) {

      user.updateCurrentUser.subscribe(currentUser => this.saveCurrentUser(currentUser));
  }

  ngOnInit() {
  }

  onLogout() {
    var u = new Currentuser("", "");
    this.user.saveUser(u);
    this.authService.logout();
    this.router.navigateByUrl('/srt/auth');
  }



  saveCurrentUser(currentUser) {
    this.firstName = currentUser.firstName;
  }

}
