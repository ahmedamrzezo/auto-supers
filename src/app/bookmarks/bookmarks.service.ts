import { Injectable } from '@angular/core';
import { SuperCarService } from '../collection/super-car.service';
import { SuperCar } from '../collection/super-car';

@Injectable({
  providedIn: 'root'
})

export class BookmarksService {

  public bookmarkedStorage = 
  localStorage.getItem('super_bookmarks')? 
  JSON.parse(localStorage.getItem('super_bookmarks')):
  [];

  bookmarkedSupers: SuperCar[] = [];

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
    return this.bookmarkedSupers;
  }
}