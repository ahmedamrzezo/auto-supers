import { Directive, OnInit, ElementRef } from '@angular/core';
import { fromEvent, asyncScheduler } from 'rxjs';
import { pluck, throttleTime } from 'rxjs/operators';
import { BookmarksService } from '../bookmarks/bookmarks.service';

@Directive({
  selector: '[appDoubleClick]'
})
export class DoubleClickDirective  implements OnInit{

  constructor(
    private elemRef: ElementRef, 
    private _bookmarksService: BookmarksService) { }

  ngOnInit() {
    fromEvent(this.elemRef.nativeElement, 'click')
    .pipe(
      pluck('target', 'parentElement', 'id'),
      throttleTime(300, asyncScheduler, {trailing: true, leading: false})
    )
    .subscribe(id => {
      this._bookmarksService.removeBookmarkById(+id);
      this._bookmarksService.updateLocalStorage();
    });
  }

}
