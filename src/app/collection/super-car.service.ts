import { Injectable } from '@angular/core';
import { SuperCar } from './super-car';
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperCarService {

  superCars: SuperCar[];
  supersChanged = new Subject<SuperCar[]>();

  firebaseURL = `${environment.firebaseapp.databaseURL}/supers.json`;

  constructor(private http: HttpClient) { }

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
    let activeSuper: SuperCar;
    this.superCars.find( car => {
      car.carCode === code ? activeSuper = car: null;
    })
    return activeSuper;
  }
}
