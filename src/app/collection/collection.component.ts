import { Component, OnInit } from '@angular/core';

import { PagesService } from '../shared/pages.service';
import { SuperCar } from './super-car';
import { SuperCarService } from './super-car.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  superCars: SuperCar[];
  loading: boolean;

  constructor(
    private _pagesService: PagesService, 
    private _superCarService: SuperCarService
  ) { }

  ngOnInit() {

    this._pagesService.bannerContent.next({title: 'Browse Supers'});
    
    this.loading = true;
    this._superCarService.getSuperCars().pipe(take(1)).subscribe(data => {
      this.superCars = data;
      this.loading = false;
    });
    
  }

}
