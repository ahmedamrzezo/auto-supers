import { Injectable } from '@angular/core';
import { SuperCarService } from '../collection/super-car.service';
import { SuperCar } from '../collection/super-car';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookmarksService {

  public bookmarkedStorage = 
  localStorage.getItem('super_bookmarks')? 
  JSON.parse(localStorage.getItem('super_bookmarks')):
  [];

  bookmarkedSupers: SuperCar[] = [];

  noBookmarksSubject = new BehaviorSubject<boolean>(false);

  constructor(
    private _superCarService: SuperCarService,
  ) {}

  getBookmarkedSuper() {
    if (this.bookmarkedSupers.length > 0) {
      this.bookmarkedSupers.length = 0;
    }
    for (const superCode of this.bookmarkedStorage) {
      let superCar = this._superCarService.getSuperByCode(superCode);
      this.bookmarkedSupers.push(superCar);
    }

    if (this.bookmarkedStorage.length == 0 ) {
      this.noBookmarksSubject.next(true);
    } else {
      this.noBookmarksSubject.next(false);
    }
    return this.bookmarkedSupers;
  }

  setBookmarkItem(code: string) {
    this.bookmarkedStorage.push(code);
  }

  removeBookmarkItem(code: string) {
    for (let i = 0; i < this.bookmarkedStorage.length; i++) {
      const bookmarkItem = this.bookmarkedStorage[i];
      if (bookmarkItem === code) {
        this.bookmarkedStorage.splice(i, 1);
      }
    }
  }

  updateLocalStorage() {
    localStorage
    .setItem(
      'super_bookmarks', 
      JSON.stringify(this.bookmarkedStorage)
    );
  }

  clearStorage() {
    this.bookmarkedStorage = [];
  }
}