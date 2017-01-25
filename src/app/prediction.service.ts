import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from  'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Prediction } from './prediction/prediction';


@Injectable()
export class PredictionService {

  constructor ( private http: Http ){};
  private predictionsUrl = ' http://ec2-54-145-198-134.compute-1.amazonaws.com:3000/predictions';
  getPredictions() {
  
    return this.http.get(this.predictionsUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
    
  }  
}
