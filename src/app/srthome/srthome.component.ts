import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from './header.component';
import { Currentuser } from '../shared/currentuser';

@Component({
  selector: 'app-srthome',
  templateUrl: './srthome.component.html',
  styleUrls: ['./srthome.component.css']
})

/***************************
  The SrthomeComponent is the root container for the application
***************************/
export class SrthomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
