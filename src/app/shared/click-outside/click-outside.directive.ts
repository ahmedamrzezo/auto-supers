import { 
  Directive, 
  HostListener, 
  Input, 
  Output, 
  OnInit
} from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective implements OnInit{
  @Input() excludeElement: string;
  @Output() togglerSubject = new Subject();

  constructor() {}

  @HostListener('document:click', ['$event.target'])
  clickedOutside(target: HTMLElement) {
    if (target.classList.contains(this.excludeElement)) {
      return;
    } else {
      this.togglerSubject.next();
    }
  }

  ngOnInit(): void {
    // fromEvent(document, 'click', { capture: true })
    // .pipe(take(1))
    // .subscribe(() => (this.togglerSubject.next(false)));
  }
}
