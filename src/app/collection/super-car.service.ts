import { Injectable } from '@angular/core';
import { SuperCar } from './super-car';
import { HttpClient } from "@angular/common/http";
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SuperCarService {

  superCars: SuperCar[];
  supersChanged = new Subject<SuperCar[]>();
  activeSuper: SuperCar;

  firebaseURL = `${environment.firebaseapp.databaseURL}/supers.json`;

  constructor(private http: HttpClient, private router: Router) { }

  getSuperCars() {
    return this.http.get<SuperCar[]>(this.firebaseURL)
    .pipe(
      tap(
        supers => {
          this.supersChanged.next(supers);
          this.superCars = supers;
        }
      )
    );
  }

  getSuperByCode(code: string) {
    // console.log(this.supersChanged.subscribe());
    this.superCars.find( car => {
      car.carCode === code ? this.activeSuper = car: null;
    })
    return this.activeSuper;
  }

  checkSuperExistence() {
    if ( !this.activeSuper ) {
      this.router.navigate(['/not-found']);
    }
    return;
  }

  addSuper(superCar: SuperCar) {
    return this.http.post(this.firebaseURL, superCar);
  }
}
