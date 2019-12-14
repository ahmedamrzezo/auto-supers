import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SuperCarService } from '../super-car.service';
import { SuperCar } from '../super-car';

@Injectable({
  providedIn: 'root'
})
export class SuperNotExistGuard implements CanActivate {

  constructor(private _superCarService: SuperCarService) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkSuperExistence(next.params.code);
  }
  checkSuperExistence(code: string): Observable<boolean> {
    let car: SuperCar;
    // return this._superCarService.supersChanged.subscribe(data => {
    //   car = data.find(car => car.carCode === code);
    // });
  }
  
}
