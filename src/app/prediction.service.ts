//Module: PredictionService
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from  'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Prediction } from './prediction/prediction';


@Injectable()
export class PredictionService {
	pushedPredictions = new EventEmitter(); //added
//function initialize HTTP service
  constructor ( private http: Http ){};
  //private predictionsUrl = ' http://ec2-54-145-198-134.compute-1.amazonaws.com:3000/predictions';
  //private predictionFilterUrl = ' http://ec2-54-145-198-134.compute-1.amazonaws.com:3000/predictions/filter';
  private predictionsUrl = 'http://localhost:3000/predictions';
  private predictionFilterUrl = 'http://localhost:3000/predictions/filter';


  //function gets all SRT predictions from the web service and MongoDB
  getPredictions() {
  
    return this.http.get(this.predictionsUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
    
  }

  getFileteredPredictions(body) { //added
  	return this.http.post(this.predictionFilterUrl, body) //added
	  	.map((res: Response) => res.json()) //added
		.catch((error:any) => Observable.throw(error.json().error || 'Server Error'));  }  //added


  pushPredictions(predictions: Prediction[]) {
  	this.pushedPredictions.emit(predictions);
  }
}
