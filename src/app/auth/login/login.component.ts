import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { PagesService } from 'src/app/shared/pages.service';
import { Admin } from '../admin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', {static: false}) loginForm: NgForm;
  email: string;
  password: string;

  formSubmitted: boolean;

  responseError: string;
  user: Admin;
  constructor(
    private _pagesService: PagesService,
    private _authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this._pagesService.bannerContent.next({ title: 'Login' });
  }

  submitForm() {
    this._authService.signInUser(this.email, this.password)
    .then(data=> {
      this._authService.getCurrentUserToken()
      .then(user => {
        const expDate = Date.parse(user['expirationTime']);

        this.user = new Admin(
                            data['user']['email'], 
                            data['user']['uid'], 
                            user['token'], 
                            expDate);
        this._authService.user.next(this.user);
        sessionStorage.setItem('admin-data', JSON.stringify(this.user));
      });
      this.router.navigate(['/supers/create']);
    })
    .catch(err => {
      this.responseError = err.message;
    });
  }

  checkForm () {
    this.emailErrors;
    this.passwordErrors;
  }

  get emailErrors() {
    if (this.loginForm.controls.email.errors) {
      if (this.loginForm.controls.email.errors.required) {
        return 'Email is required'
      } else {
        return 'Email should be valid!'
      }
    }else {
      return
    }
  }

  get passwordErrors() {
    if (this.loginForm.controls.password.errors) {
      if (this.loginForm.controls.password.errors.required) {
        return 'Password required'
      } else {
        return 'Password should be 8 or more characters'
      }
    }else {
      return
    }
  }

}
