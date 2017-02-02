//Module: SolicitationTableComponent
import { Component, OnInit } from '@angular/core';

import { Prediction } from '../../prediction/prediction';
import { PredictionService } from '../../prediction.service';

@Component({
  selector: 'app-solicitation-table',
  templateUrl: './solicitation-table.component.html',
  styleUrls: ['./solicitation-table.component.css']
})
export class SolicitationTableComponent implements OnInit {
title = '508 Compliance Predictions';
  predictions: Prediction[];

//function constructor to instantiate the data service
  constructor(private predictionService: PredictionService) {}
//function that invokes the service to get predictions for display in the Section 508 Report (table)
  getPredictions() {
    this.predictionService.getPredictions()
      .subscribe(
        predictions => this.predictions = predictions,
        err => {
          console.log(err);
        });
  }
//function that initializes data to display in the 508 report
  ngOnInit(): void {
    this.getPredictions();
    this.predictionService.pushedPredictions.subscribe(
      data => this.predictions = data);
  }

}
