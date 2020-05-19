import { Component, OnInit, ViewChild } from '@angular/core';
import { PagesService } from 'src/app/shared/pages.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Admin } from '../admin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm', {static: false}) registerForm: NgForm;
  email: string;
  password: string;

  formSubmitted: boolean;

  responseError: string;

  user: Admin;

  constructor(
    private _pagesService: PagesService,
    private _authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this._pagesService.bannerContent.next({ title: 'Register', desc: 'To be able to create, edit or delete super car'});
  }

  submitForm() {
    this.formSubmitted = true;
    
    if (this.registerForm.valid) {
      this._authService.registerUser(this.email, this.password)
      .then(() => {
        this.router.navigateByUrl('/admin/login');
      })
      .catch((err: Error) => {
        this.responseError = err.message;
      });
    }
  }

  checkForm () {
    this.emailErrors;
    this.passwordErrors;
  }

  get emailErrors() {
    if (this.registerForm.controls.email.errors) {
      if (this.registerForm.controls.email.errors.required) {
        return 'Email is required'
      } else {
        return 'Email should be valid!'
      }
    }else {
      return
    }
  }

  get passwordErrors() {
    if (this.registerForm.controls.password.errors) {
      if (this.registerForm.controls.password.errors.required) {
        return 'Password required'
      } else {
        return 'Password should be 8 or more characters'
      }
    }else {
      return
    }
  }

}
