import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { PredictionService } from '../../prediction.service';
import { Prediction } from '../../prediction/prediction';

@Component({
  selector: 'app-solicitation-detail',
  templateUrl: './solicitation-detail.component.html',
  styleUrls: ['./solicitation-detail.component.css']
})
export class SolicitationDetailComponent implements OnInit {
  solicitation: Prediction;
  private subscription: Subscription;
  private solicitationIndex: String;

	constructor(private predictionService: PredictionService, private route: ActivatedRoute) { }

  ngOnInit() {
    // listen for the activated route and use the 'id'  to pull chosen solicitation from mongo
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.solicitationIndex = params['id'];
    // pull chosen solicitation from mongo
        this.predictionService.getSolicitation(this.solicitationIndex)
          .subscribe(
            solicitation => {
              this.solicitation = solicitation;
          },
          err => {
              console.log(err);
          });
  });

    }
}
