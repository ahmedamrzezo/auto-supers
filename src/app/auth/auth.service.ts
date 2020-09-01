import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { BehaviorSubject } from 'rxjs';
import { Admin } from './admin.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<Admin>(this.admin);

  constructor(private fireAuth: FirebaseApp, private router: Router) { }

  get admin(): Admin {
    return JSON.parse(sessionStorage.getItem('admin-data'));
  }

  registerUser(email: string, password: string) {
    return this.fireAuth.auth().createUserWithEmailAndPassword(email, password);
  }

  signInUser(email: string, password: string) {
    return this.fireAuth.auth().signInWithEmailAndPassword(email, password);
  }

  getCurrentUserToken() {
    return this.fireAuth.auth().currentUser.getIdTokenResult();
  }

  logoutAdmin() {
    this.user.next(null);
    this.router.navigate(['/']);
    sessionStorage.removeItem('admin-data');
  }
}
