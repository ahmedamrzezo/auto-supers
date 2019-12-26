import { Component, OnInit } from '@angular/core';
import { PagesService } from '../shared/pages.service';
import { BookmarksService } from './bookmarks.service';
import { SuperCar } from '../collection/super-car';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarkedSupers: SuperCar[] = [];

  constructor(
    private _pagesService: PagesService, 
    private _bookmarksService: BookmarksService) { }

  ngOnInit() {
    this._pagesService.bannerContent.next({title: 'Super Bookmarks'});

    this.bookmarkedSupers = this._bookmarksService.getBookmarkedSuper();
  }

}
