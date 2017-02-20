import { Component, OnInit, Input } from '@angular/core';

import { PredictionService } from '../../prediction.service';

@Component({
  selector: 'app-solicitation-detail',
  templateUrl: './solicitation-detail.component.html',
  styleUrls: ['./solicitation-detail.component.css']
})
export class SolicitationDetailComponent implements OnInit {

	@Input() solicitation: {};

  constructor(private predictionService: PredictionService) { }

  ngOnInit(): void {
  	this.predictionService.pushedSolicitation.subscribe(
      solicitation => this.solicitation = solicitation);
  	console.log("here is what i get ", this.solicitation);
  }

}
