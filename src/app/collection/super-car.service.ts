import { Injectable } from '@angular/core';
import { SuperCar } from './super-car';
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuperCarService {

  superCars: SuperCar[];

  firebaseURL = 'https://auto-supers.firebaseio.com/supers.json';

  constructor(private http: HttpClient) { }

  getSuperCars() {
    return this.http.get<SuperCar[]>(this.firebaseURL)
    .pipe(
      tap(
        supers => {
          this.superCars =  supers;
        }
      )
    );
  }

  getSuperByCode(code: string) {
    return this.superCars.find((car) => {
      if (car.carCode === code) {
        return car;
      }
    });
  }
}
