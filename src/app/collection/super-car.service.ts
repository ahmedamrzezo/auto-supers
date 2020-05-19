import { Injectable } from '@angular/core';
import { SuperCar } from './super-car';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from '../auth/admin.model';

@Injectable({
  providedIn: 'root'
})
export class SuperCarService {

  superCars: SuperCar[];
  supersChanged = new Subject<SuperCar[]>();
  activeSuper: SuperCar;

  firebaseURL = `${environment.firebaseapp.databaseURL}/supers.json`;

  admin: Admin = JSON.parse(sessionStorage.getItem('admin-data'));

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4444'
    }),
    params: {auth: this.admin._token}
  }

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private actRoute: ActivatedRoute) { }

  getSuperCars() {
    return this.http.get<SuperCar[]>(this.firebaseURL)
    .pipe(
      map(
        supersObject => {
          const supersArray = Object.values(supersObject);
          return supersArray;
        }
      ),
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

  addSuperApi(superCar: SuperCar) {
    const carCode = superCar.carName.toLocaleLowerCase().split(' ').join('_');
    superCar.carCode = carCode;
    return this.http.post(this.firebaseURL, superCar, this.httpOptions);
  }

  editSuperApi(superCar: SuperCar) {
    const oldCarCode = this.actRoute.snapshot.params.carCode;
    const carCode = superCar.carName.toLocaleLowerCase().split(' ').join('_');
    superCar.carCode = carCode;
    let newCars = [];
    this.superCars.forEach((val, id) => {
      if (oldCarCode === val.carCode) {
        this.superCars.splice(id, 1);
        newCars = this.superCars;
      }
    });
    newCars.push(superCar);
    return this.http.put(this.firebaseURL, newCars, this.httpOptions);
  }

  deleteSuper(superCar: SuperCar) {
    let carId = '';
    let newCars = [];

    this.superCars.forEach((val, id) => {
      if (superCar.carCode === val.carCode) {
        carId = id.toString();
        this.superCars.splice(id, 1);
        newCars = this.superCars;
      }
    });
    
    return this.http.put(this.firebaseURL, newCars, this.httpOptions);
  }
}
