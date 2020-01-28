import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PagesService } from 'src/app/shared/pages.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { take, debounceTime, map, throttleTime, auditTime } from 'rxjs/operators';
import { asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-supercar-edit',
  templateUrl: './supercar-edit.component.html',
  styleUrls: ['./supercar-edit.component.scss']
})
export class SupercarEditComponent implements OnInit {
  
  currentYear = new Date().getFullYear();
  superForm: FormGroup;

  constructor(
    private _pagesService: PagesService,
    private router: Router) { }

  ngOnInit() {

    this._pagesService.bannerContent.next({title: 'Create/Edit a Super'});

    this.checkRoute();
    
    this.superForm = new FormGroup({
      carName: new FormControl(
        '', 
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50)
        ]
      ),
      brandName: new FormControl(
        '', 
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15)
        ]
      ),
      manufactureYear: new FormControl(
        '', 
        [
          Validators.required,
          Validators.pattern(`^(198[0-9]|199[2-9]|200[0-9]|201[0-9]|${this.currentYear})$`)
        ]
      ),
      description: new FormControl(
        '', 
        [
          Validators.required
        ]
      ),
      engineType:  new FormControl(
        '', 
        [
          Validators.required
        ]
      ),
      engineCC: new FormControl(
        '', 
        [
          Validators.required,
          Validators.pattern('[2-8]{1}\.[1-8]{1}|[1-8]{1}/g')
        ]
      ),
      horsePower: new FormControl(
        '', 
        [
          Validators.required,
          Validators.pattern('[4-9]{4}')
        ]
      ),
      torque: new FormControl(
        '', 
        [
          Validators.required,
          Validators.pattern('[0-9]{4}')
        ]
      ),
      maxSpeed: new FormControl(
        '', 
        [
          Validators.required,
          Validators.pattern('[0-9]{4}')
        ]
      ),
      zeroToSixty: new FormControl(
        '', 
        [
          Validators.required
        ]
      ),
      price: new FormControl(
        '', 
        [
          Validators.required
        ]
      ),
      carImages: new FormControl(
        '', 
        [
          Validators.required
        ]
      ),
    });

    this.insertDotAfterFirstNumber();
  }

  private checkRoute() {
    const currentRouterURL = this.router.url;

    if (currentRouterURL.match('create')) {
      // this.addSuper();
    } 
    else if (currentRouterURL.match('edit')) {
      // this.editSuper()
    }
  }

  addSuper() {

  }

  editSuper() {

  }

  submitForm() {
    console.log(this.superForm);
  }

  private insertDotAfterFirstNumber() {
    this.superForm.controls.engineCC.valueChanges
    .pipe(
      throttleTime(1000, asyncScheduler, {leading: false, trailing: true}),
      map(val => val !== null? val : '')
    )
    .subscribe(
      engineCCVal => {
        let engineCCValStr = engineCCVal.toString();
        if (engineCCValStr !== '.') 
        {
          engineCCVal = engineCCValStr.substr(0, 1) + '.' + engineCCValStr[1];
          this.superForm.controls.engineCC.setValue(+engineCCVal);
        }
        return;
      }
    )

  }
  cancelModification() {
    this.router.navigate(['/supers']);
  }

  /** TODO:
   * edit super detail
   * save data
   * cancel edit
   * can deactivate route to ask permission to leave page
   */

}
