import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  constructor(
    private _pagesService: PagesService) { }

  ngOnInit() {
    this._pagesService.bannerContent.next({title: 'Super Bookmarks'});
  }

}
