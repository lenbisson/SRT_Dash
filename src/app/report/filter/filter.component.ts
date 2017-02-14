import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Prediction } from '../../prediction/prediction';
import { PredictionService } from '../../prediction.service';
import { AgencyService } from '../../agency.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  predictions: Prediction[];
  agencies: String[];

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
  ];

  constructor(private predictionService: PredictionService, private agencyService: AgencyService) { }

  ngOnInit() {
    this.agencies = this.agencyService.getAgencies();
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
