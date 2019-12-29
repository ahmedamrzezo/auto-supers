import { Directive, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appDragListItem]'
})
export class DragListItemDirective implements OnInit{

  constructor(private elemRef: ElementRef) { }

  ngOnInit() {
    fromEvent(this.elemRef.nativeElement, 'click').subscribe(() => {console.log('object');})
  }
}
