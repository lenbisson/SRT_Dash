import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import './rxjs-operators';

import { Prediction } from './prediction/prediction';
import { PredictionService } from './prediction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ PredictionService ]
})
export class AppComponent implements OnInit {
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
