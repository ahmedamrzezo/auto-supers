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

  bookmarked = false;
  isAdmin = true;

  bookmarkedSupers = [];

  slidesConfig = {
    dot: true,
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll: 1
  }

  constructor(
    private _pagesService: PagesService, 
    private _superCarService: SuperCarService,
    private router: ActivatedRoute
    ) {}

  ngOnInit() {
    this.router.params.pipe(take(1)).subscribe((param) => {
      this.activeSuper = this._superCarService.getSuperByCode(param.code);
      if (this.activeSuper) {
        this._pagesService.bannerContent.next({title: this.activeSuper.carName});
      }
    });

    if (localStorage.getItem('super_bookmarks') !== null) {
      this.bookmarked = true;
      this.bookmarkedSupers = JSON.parse(localStorage.getItem('super_bookmarks'));
      console.log(this.bookmarkedSupers);
    } else {
      this.bookmarked = false;
    }
    // console.log(localStorage.getItem('super_bookmarks').length);

    this._superCarService.checkSuperExistence();
  }

  addBookmark(car: SuperCar) {
    // console.log(car);
    this.bookmarked = !this.bookmarked;
    if (this.bookmarked) {
      this.bookmarkedSupers.push(car.carCode);
    } else {
      // supersBookmarked.re
      // console.log(localStorage.clear)
      localStorage.removeItem('super_bookmarks');
    }
    localStorage
    .setItem(
      'super_bookmarks', 
      JSON.stringify(this.bookmarkedSupers)
    );
  }
  
}
