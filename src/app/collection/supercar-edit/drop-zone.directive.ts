import { Directive, HostListener, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {
  @Output() droppedFiles = new Subject<FileList>();
  @Output() hovered = new Subject<boolean>();

  constructor() { }
  
  @HostListener('drop', ['$event'])
  onDrop (ev) {
    ev.preventDefault();
    this.droppedFiles.next(ev.dataTransfer.files);
    this.hovered.next(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver(ev) {
    ev.preventDefault();
    this.hovered.next(true);
  }
  @HostListener('window:dragover', ['$event'])
  onWindowDrag(ev) {
    ev.preventDefault();
    this.hovered.next(true);
  }
  @HostListener('window:drop', ['$event'])
  onWindowDrop(ev) {
    ev.preventDefault();
    this.hovered.next(false);
  }
  @HostListener('dragend', ['$event'])
  onDragEnd(ev) {
    this.hovered.next(false);
    console.log('stopped');
    console.log(ev);
  }

}
