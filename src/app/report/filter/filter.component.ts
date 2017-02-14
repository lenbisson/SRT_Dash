import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Prediction } from '../../prediction/prediction';
import { PredictionService } from '../../prediction.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  predictions: Prediction[];

  filterParams = {
      agency: '',
      office: '',
      contact: '',
      eitLikelihood: '',
      isReadable: '',
      reviewStatus: '',
      reviewRec: '' 
    };

  choices = [
    '',
    'Yes',
    'No'
  ];

  status = [
    '',
    'Incomplete',
    'Complete'
  ]

  constructor(private predictionService: PredictionService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {	
  	console.log(this.filterParams);
  	this.predictionService.getFileteredPredictions(this.filterParams)
  		.subscribe(
        	predictions => {
        		this.predictions = predictions;
        		this.predictionService.pushPredictions(predictions);
        	},
        	err => {
          		console.log(err);
        	});
  			

  }

  

}
