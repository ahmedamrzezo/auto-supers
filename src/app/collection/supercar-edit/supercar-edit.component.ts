import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PagesService } from 'src/app/shared/pages.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-supercar-edit',
  templateUrl: './supercar-edit.component.html',
  styleUrls: ['./supercar-edit.component.scss']
})
export class SupercarEditComponent implements OnInit {

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
          Validators.required
        ]
      ),
      brandName: new FormControl(
        '', 
        [
          Validators.required
        ]
      ),
      manufactureYear: new FormControl(
        '', 
        [
          Validators.required
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
          Validators.required
        ]
      ),
      horsePower: new FormControl(
        '', 
        [
          Validators.required
        ]
      ),
      torque: new FormControl(
        '', 
        [
          Validators.required
        ]
      ),
      maxSpeed: new FormControl(
        '', 
        [
          Validators.required
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
  }

  private checkRoute() {
    const currentRouterURL = this.router.url;

    if (currentRouterURL.match('create')) {
      
    } 
    else if (currentRouterURL.match('edit')) {
      return;
    }
  }

  /** TODO:
   * edit super detail
   * save data
   * cancel edit
   * can deactivate route to ask permission to leave page
   */

}
