import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SuperCarService } from './super-car.service';
import { SuperCar } from './super-car';

@Injectable({
  providedIn: 'root'
})
export class SupersResolverService implements Resolve <SuperCar[]> {

  constructor(private _supersService: SuperCarService) { }

  resolve(
    router: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {

    return this._supersService.getSuperCars();
  }
}
