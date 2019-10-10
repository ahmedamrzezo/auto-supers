import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  bannerContent = new Subject<{title: string, desc?: string}>();

  constructor() { }
}
