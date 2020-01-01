import { Directive, OnInit, ElementRef, Output } from '@angular/core';
import { fromEvent, asyncScheduler, Subject } from 'rxjs';
import { pluck, throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[appDoubleClick]'
})
export class DoubleClickDirective  implements OnInit{

  @Output('doubleClickAction') actionSub = new Subject();

  constructor(
    private elemRef: ElementRef) { }

  ngOnInit() {
    fromEvent(this.elemRef.nativeElement, 'click')
    .pipe(
      pluck('target'),
      throttleTime(300, asyncScheduler, {trailing: true, leading: false})
    )
    .subscribe(target => {
      this.actionSub.next(target);
    });
  }

}
