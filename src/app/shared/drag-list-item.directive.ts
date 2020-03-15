import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appDragListItem]'
})
export class DragListItemDirective implements OnInit{

  constructor(
    private elemRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    const dragStart = fromEvent(this.elemRef.nativeElement, 'dragstart');
    
    dragStart.subscribe(
      ev => {
        console.log(ev);
        console.dir(ev['target']['parentNode']);
        const movementVal = ev['clientY'];
        console.log(movementVal);
        this.renderer.setStyle(ev['target']['parentNode'], 'transform', `translateY(${movementVal})`);
      }
    );

    const dragOver = fromEvent(this.elemRef.nativeElement, 'dragover');

    dragOver.subscribe(ev => {
      console.log(ev);
      console.dir(this.elemRef.nativeElement.parentNode);
      this.renderer
      .setStyle(
        this.elemRef.nativeElement, 
        'cursor', `grabbing`
      );

      // const movementVal = 
      // ev['pageY'] - this.elemRef.nativeElement.parentNode.offsetHeight;
      const movementVal = this.elemRef.nativeElement.parentNode.offsetTop
      + 
      ev['offsetY']
      ;
      console.log(movementVal);

      this.renderer
      .setStyle(
        this.elemRef.nativeElement.parentNode, 
        'transform', `translateY(${movementVal}px)`
      );
    });

    const dragEnd = fromEvent(this.elemRef.nativeElement, 'dragend');

    dragEnd
    .subscribe(ev => {
      this.renderer
      .setStyle(
        this.elemRef.nativeElement, 
        'cursor', `grab`
      );
    });
  }
}
