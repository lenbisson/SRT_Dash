//Module: PredictionService
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from  'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Prediction } from './prediction/prediction';


@Injectable()
export class PredictionService {
	pushedPredictions = new EventEmitter();
  pushedSolicitation = new EventEmitter();
//function initialize HTTP service
  constructor ( private http: Http ){};
  private predictionsUrl = 'http://ec2-54-145-198-134.compute-1.amazonaws.com:3000/predictions';
  private predictionFilterUrl = 'http://ec2-54-145-198-134.compute-1.amazonaws.com:3000/predictions/filter';
	private solicitationUrl = 'http://ec2-54-145-198-134.compute-1.amazonaws.com:3000/solicitation/';

  //  private predictionsUrl = 'http://localhost:3000/predictions';
  //  private predictionFilterUrl = 'http://localhost:3000/predictions/filter';
  //  private solicitationUrl = 'http://localhost:3000/solicitation';

  getFileteredPredictions(body) {
		console.log(body);
  	return this.http.post(this.predictionFilterUrl, body)
	  	.map((res: Response) => res.json())
		.catch((error:any) => Observable.throw(error.json().error || 'Server Error'));  }


  pushPredictions(predictions: Prediction[]) {
  	this.pushedPredictions.emit(predictions);
  }

  getSolicitation(index: String): Observable<Prediction> {
		console.log("index in service = ", index);

    const solUrl = this.solicitationUrl + index;
    return this.http.get(solUrl)
      .map((res: Response) => res.json());

  }
}
