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

  constructor(private predictionService: PredictionService) {}

  getPredictions() {
    this.predictionService.getPredictions()
      .subscribe(
        predictions => this.predictions = predictions,
        err => {
          console.log(err);
        });
  }

  ngOnInit(): void {
    this.getPredictions();
  }

}
