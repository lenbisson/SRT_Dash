import { Component, Input, OnInit } from '@angular/core';
import { PredictionService } from '../prediction.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  title = 'Section 508 Compliance Report';
  rows: any[] = [];
    
  columns: any[] = [
    {
      display: 'Solicitation', //The text to display
      variable: 'solNum', //The name of the key that's part of the data array
      filter: 'text' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'Title', 
      variable: 'title', 
      filter: 'text' 
    },
    {
      display: 'URL', 
      variable: 'url', 
      filter: 'text' 
    },
    {
      display: 'Prediction', 
      variable: 'predictions.RED', 
      filter: 'text' 
    },
    {
      display: 'Review Recommended', 
      variable: 'reviewRec', 
      filter: 'boolean' 
    },{
      display: 'Date', 
      variable: 'date', 
      filter: 'date' 
    },{
      display: 'Readable?', 
      variable: 'isReadable', 
      filter: 'text' 
    },
    {
      display: 'EIT Likelihood', 
      variable: 'eitLikelihood', 
      filter: 'text' 
    },
    {
      display: 'Agency', 
      variable: 'agency', 
      filter: 'text' 
    },
    {
      display: 'Office', 
      variable: 'office', 
      filter: 'text' 
    },
    {
      display: 'Contact', 
      variable: 'contact', 
      filter: 'text' 
    },
    {
      display: 'Position', 
      variable: 'position', 
      filter: 'text' 
    },
    {
      display: 'Review Status', 
      variable: 'reviewStatus', 
      filter: 'text' 
    }
  ];
  sorting: any = {
    column: 'Name', //to match the variable of one of the columns
    descending: false
  };

  //function constructor to instantiate the data service
  constructor(private predictionService: PredictionService) {}
//function that invokes the service to get predictions for display in the Section 508 Report (table)
  getPredictions() {
    this.predictionService.getPredictions()
      .subscribe(
        predictions => this.rows = predictions,
        err => {
          console.log(err);
        });
  }
//function that initializes data to display in the 508 report
  ngOnInit(): void {
    this.getPredictions();
    this.predictionService.pushedPredictions.subscribe(
      data => this.rows = data);
  }

}
