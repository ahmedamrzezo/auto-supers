import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SupercarEditComponent } from '../supercar-edit/supercar-edit.component';

export class ModifyFormGuard implements CanDeactivate<SupercarEditComponent> {
  canDeactivate(
    component: SupercarEditComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(component);
    if (component.superForm.touched && component.superForm.dirty) {
      return confirm('Do you really want to discard the modifications?') ? true: false;
    } else {
      return true;
    }
  }
}