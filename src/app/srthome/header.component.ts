//Module: SRTHeaderComponent
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
<<<<<<< HEAD
  firstName = localStorage.getItem('firstName');
  constructor(private authService: AuthService,
              private router: Router) { }
=======

  firstName = localStorage.getItem("firstName");

  constructor() { }
>>>>>>> sol_detail_component

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth', 'login']);
  }

}
