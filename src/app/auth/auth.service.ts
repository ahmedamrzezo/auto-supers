import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { BehaviorSubject } from 'rxjs';
import { Admin } from './admin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<Admin>(null);

  constructor(private fireAuth: FirebaseApp) { }

  registerUser(email: string, password: string) {
    return this.fireAuth.auth().createUserWithEmailAndPassword(email, password);
  }

  signInUser(email: string, password: string) {
    return this.fireAuth.auth().signInWithEmailAndPassword(email, password);
  }

  getCurrentUserToken() {
    return this.fireAuth.auth().currentUser.getIdTokenResult();
  }
}
