import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD1PXQafOkXXeNXUMosgIJBTiXCJR2VcZ4",
  authDomain: "auto-supers.firebaseapp.com",
  databaseURL: "https://auto-supers.firebaseio.com",
  projectId: "auto-supers",
  storageBucket: "auto-supers.appspot.com",
  messagingSenderId: "704428042217",
  appId: "1:704428042217:web:fd51f7947499d45c9acd78",
  measurementId: "G-E5V869E8MR"
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule 
  ]
})
export class FirebaseModule { }
