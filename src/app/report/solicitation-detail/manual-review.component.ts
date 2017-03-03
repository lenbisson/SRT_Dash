import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PredictionService } from '../../prediction.service';

@Component({
  selector: 'app-manual-review',
  templateUrl: './manual-review.component.html',
  styleUrls: ['./manual-review.component.css']
})
export class ManualReviewComponent implements OnInit {
	// radio button choices
  choices = [
    {value: 'Yes', display: 'Yes'},
    {value: 'No', display: 'No'}
  ];
// initialize radio choices
	review = {
		eit: '',
		standards: '',
		v_conformance: '',
		evaluation: '',
		a_conformance: '',
		comments: ''
	};

  constructor(
  	private predictionService: PredictionService,
    private router: Router) { }

  ngOnInit() {
  }
// when user submits the form show the proper page
// ToDo: make url dynamic
  onSubmit(form: NgForm) {
  	if (form.value.eit == 'No') {
   		this.router.navigate(['/srt', 'solicitation', '58a516ad941768890b00949a', 'review', 'green']);
  	}
  	if (form.value.eit == 'Yes') {
  		   	this.router.navigate(['/srt', 'solicitation', '58a516ad941768890b00949a', 'review', 'red']);
  	}
  }

}
