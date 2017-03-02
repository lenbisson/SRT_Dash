import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../user';
import { Currentuser } from '../../shared/currentuser';
import { AuthService } from '../auth.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  myForm: FormGroup;



  constructor(private authService: AuthService,
              private router: Router,
              private user: UserService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const user = new User(this.myForm.value.email, this.myForm.value.password);
    this.authService.login(user)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          var currentUser = new Currentuser(data.firstName, data.agency);
          this.user.saveUser(currentUser);
          this.router.navigateByUrl('/srt/report');
        },
        error => console.log(error)
      );
    this.myForm.reset();
  }

}
