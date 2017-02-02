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

  constructor(private predictionService: PredictionService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
  	var filterParams = {
  		agency: form.value.agencyFilter,
  		contact: form.value.contactFilter,
  		eitLikelihood: form.value.eitFilter
  	};

  	this.predictionService.getFileteredPredictions(filterParams)
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
