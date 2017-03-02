import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {  } from 'rxjs/Rx';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable()
export class AuthService {

  private userUrl = 'http://ec2-54-145-198-134.compute-1.amazonaws.com:3000/user';
  private loginUrl = 'http://ec2-54-145-198-134.compute-1.amazonaws.com:3000/user/login';

// private userUrl = 'http://localhost:3000/user';
// private loginUrl = 'http://localhost:3000/user/login';

  signup(user: User){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.userUrl, body, {headers: headers})
        .map((response: Response)=> response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

  login(user: User){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.loginUrl, body, {headers: headers})
        .map((response: Response)=> response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

  logout() {
    localStorage.removeItem("token");
  }

  constructor(private http: Http) { }

}
