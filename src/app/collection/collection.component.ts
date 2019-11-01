import { Component, OnInit } from '@angular/core';
import { PagesService } from '../shared/pages.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  constructor(private _pagesService: PagesService) { }

  ngOnInit() {

    this._pagesService.bannerContent.next({title: 'Browse Supers'});
    
  }

}
