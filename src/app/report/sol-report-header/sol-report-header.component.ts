import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sol-report-header',
  templateUrl: './sol-report-header.component.html',
  styleUrls: ['./sol-report-header.component.css']
})
export class SolReportHeaderComponent implements OnInit {
  // pull user's agency from storage to display in header
  agency = localStorage.getItem("agency");
  constructor() { }

  ngOnInit() {
  }

}
