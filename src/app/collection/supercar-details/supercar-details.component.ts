import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { PagesService } from 'src/app/shared/pages.service';
import { SuperCarService } from '../super-car.service';
import { SuperCar } from '../super-car';

@Component({
  selector: 'app-supercar-details',
  templateUrl: './supercar-details.component.html',
  styleUrls: ['./supercar-details.component.scss']
})
export class SupercarDetailsComponent implements OnInit {

  activeSuper: SuperCar;

  constructor(
    private _pagesService: PagesService, 
    private _superCarService: SuperCarService,
    private router: ActivatedRoute
    ) {}

  ngOnInit() {
    this.router.params.pipe(take(1)).subscribe((param) => {
      this.activeSuper = this._superCarService.getSuperByCode(param.code);
      this._pagesService.bannerContent.next({title: this.activeSuper.carName});
    })
  }

}

/**
 * TODO:
 * - create details ui [image/title/tags/specs/related]
 * - create interface/model
 * - 
 */
