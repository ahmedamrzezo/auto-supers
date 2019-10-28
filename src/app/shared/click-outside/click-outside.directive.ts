import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';
import { HeaderComponent } from 'src/app/header/header.component';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  host = this.renderer.selectRootElement(this.elemRef.nativeElement);

  @HostListener('window:click', ['$event.target'])
  clickedOutside(target: HTMLElement) {
    if (target.nextSibling == this.host) {
      return;
    } else {
      if (this.host.classList.contains('navbar--mobile') ) {
        this.headerComp.navIsOpened = false;
      }
    }
  }

  constructor(private renderer: Renderer2, private elemRef: ElementRef, private headerComp: HeaderComponent) {}
}
