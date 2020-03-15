import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { PagesService } from 'src/app/shared/pages.service';
import { SuperCarService } from '../super-car.service';
import { SuperCar } from '../super-car';
import { BookmarksService } from 'src/app/bookmarks/bookmarks.service';

@Component({
  selector: 'app-supercar-details',
  templateUrl: './supercar-details.component.html',
  styleUrls: ['./supercar-details.component.scss']
})
export class SupercarDetailsComponent implements OnInit {

  activeSuper: SuperCar;

  isBookmarked = false;
  isAdmin = true;

  bookmarkedStorage = this._bookmarksService.bookmarkedStorage;

  slidesConfig = {
    dot: true,
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll: 1
  }

  constructor(
    private _pagesService: PagesService, 
    private _superCarService: SuperCarService,
    private _bookmarksService: BookmarksService,
    private router: ActivatedRoute
    ) {}

  ngOnInit() {
    this.router.params.pipe(take(1)).subscribe((param) => {
      this.activeSuper = this._superCarService.getSuperByCode(param.code);
      if (this.activeSuper) {
        this._pagesService.bannerContent.next({title: this.activeSuper.carName});
      }
    });

    /**
     * check if the active car is bookmarked in localstorage
     * to make the button active
     * @param localStorage
     */
    if (this.bookmarkedStorage.indexOf(this.activeSuper.carCode) !== -1) {
      this.isBookmarked = true;
    }

    this._superCarService.checkSuperExistence();
  }

  /**
   * add to bookmark array if it's not already added
   * @param car 
   */
  addBookmark(car: SuperCar) {
    if (this.isBookmarked) {
      this._bookmarksService.removeBookmarkItem(car.carCode);
    } else {
      this._bookmarksService.setBookmarkItem(car.carCode);
    }
    this._bookmarksService.updateLocalStorage();
    this.isBookmarked = !this.isBookmarked;
  }
  
}
