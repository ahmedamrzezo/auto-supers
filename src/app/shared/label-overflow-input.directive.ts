import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appLabelOverflowInput]'
})
export class LabelOverflowInputDirective implements OnInit{

  constructor(
    private elemRef: ElementRef, 
    private renderer: Renderer2) { 
    }

    ngOnInit() {
      const inputElem = this.elemRef.nativeElement.nextElementSibling;

      fromEvent(inputElem, 'focus').subscribe((ev: Event) => {
        ev.preventDefault();
        this.renderer.addClass(this.elemRef.nativeElement, 'e-label--focused');
      });

      fromEvent(inputElem, 'blur').subscribe((ev: Event) => {
        ev.preventDefault();
        if (ev.target['value']) {
          return;
        }
        this.renderer.removeClass(this.elemRef.nativeElement, 'e-label--focused');
      });
    }
}
