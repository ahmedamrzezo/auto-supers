import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirebaseApp } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private fireAuth: FirebaseApp) { }

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
