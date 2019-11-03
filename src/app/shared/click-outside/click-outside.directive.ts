import { 
  Directive, 
  HostListener, 
  Input, 
  Output, 
  OnInit,
  ElementRef
} from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective implements OnInit{
  @Input() excludeElement: string;
  @Output() togglerSubject = new Subject();

  constructor(private elemRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  clickedOutside(target: HTMLElement) {
    if (target.classList.contains(this.excludeElement)) {
      return;
    } 
    else if (this.elemRef.nativeElement.contains(target)) {
      return;
    } 
    else {
      this.togglerSubject.next();
    }
  }

  ngOnInit(): void {
    // fromEvent(document, 'click', { capture: true })
    // .pipe(take(1))
    // .subscribe(() => (this.togglerSubject.next(false)));
  }
}
