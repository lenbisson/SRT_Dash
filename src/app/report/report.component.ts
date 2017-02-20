import { Component, Input, OnInit } from '@angular/core';
import { PredictionService } from '../prediction.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  title = 'Section 508 Compliance Report';
  rows: any[] = [];
    
  // 
  sorting: any = {
    column: 'Name', //to match the variable of one of the columns
    descending: false
  };

  constructor() {}

}
