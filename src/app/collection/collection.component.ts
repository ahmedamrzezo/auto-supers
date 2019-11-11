import { Component, OnInit } from '@angular/core';

import { PagesService } from '../shared/pages.service';
import { SuperCar } from './super-car';
import { SuperCarService } from './super-car.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  superCars: SuperCar[];

  constructor(
    private _pagesService: PagesService, 
    private _superCarService: SuperCarService
  ) { }

  ngOnInit() {

    this._pagesService.bannerContent.next({title: 'Browse Supers'});

    this.superCars = this._superCarService.getSuperCars();
    
  }

}

/**
 * TODO:
 * - create super card ui [image/title/tags/short-description]
 * - create super interface
 * - define a supers dummy array
 * - display array in collection page
 */
