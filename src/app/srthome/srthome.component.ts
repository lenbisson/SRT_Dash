import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from './header.component';
import { Currentuser } from '../shared/currentuser';

@Component({
  selector: 'app-srthome',
  templateUrl: './srthome.component.html',
  styleUrls: ['./srthome.component.css']
})
export class SrthomeComponent implements OnInit {

  currentUser: Currentuser;

  saveCurrentUser(currentUser: Currentuser) {
    this.currentUser = new Currentuser(currentUser.firstName, currentUser.agency);
  }
  constructor() { }

  ngOnInit() {
  }

}
