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

// initial state for filter fields
// likely need to tweek this when we get login and roles implemented.
  filterParams = {
      agency: '',
      office: '',
      contact: '',
      eitLikelihood: '',
      isReadable: '',
      reviewStatus: '',
      reviewRec: '',
    };

// radio button choices
  choices = [
    {value: '', display: 'All'},
    {value: 'Yes', display: 'Yes'},
    {value: 'No', display: 'No'}
  ];

// review status
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

// Listens to click event in the Filter component, "Clear All".  Resets filter parameters to
// original state, and resets unfiltered data.
  onClear() {
    var agency = localStorage.getItem("agency");
    if (agency == "General Services Administration"){
      agency = "";
    } 
    this.filterParams = {
      agency: agency,
      office: '',
      contact: '',
      eitLikelihood: '',
      isReadable: '',
      reviewStatus: '',
      reviewRec: '',
    };

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
