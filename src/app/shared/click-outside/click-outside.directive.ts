import { Directive, Renderer2, ElementRef, HostListener, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Input() excludeElement: string;
  @Output() togglerSubject = new Subject<boolean>();

  host = this.renderer.selectRootElement(this.elemRef.nativeElement);

  @HostListener('window:click', ['$event.target'])
  clickedOutside(target: HTMLElement) {
    if (target.classList.contains(this.excludeElement)) {
      return;
    } else {
      this.togglerSubject ?
      this.togglerSubject.next(false):
      null
    }
  }

  constructor(private renderer: Renderer2, private elemRef: ElementRef) {}
}
