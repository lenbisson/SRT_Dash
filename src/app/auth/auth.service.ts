import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {  } from 'rxjs/Rx';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable()
export class AuthService {
  signup(user: User){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/user', body, {headers: headers})
        .map((response: Response)=> response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

  login(user: User){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/user/login', body, {headers: headers})
        .map((response: Response)=> response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("agency");    
  }

  constructor(private http: Http) { }

}
