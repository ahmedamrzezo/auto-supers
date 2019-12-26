import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BookmarksService {

  public bookmarkedStorage = 
  localStorage.getItem('super_bookmarks')? 
  JSON.parse(localStorage.getItem('super_bookmarks')):
  [];

  constructor() {console.log(this.bookmarkedStorage);}
}