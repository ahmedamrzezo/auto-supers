import { Component, OnInit } from '@angular/core';
import { PagesService } from '../shared/pages.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  constructor(private pagesService: PagesService) { }

  ngOnInit() {

    this.pagesService.bannerContent.next({title: 'Browse Supers'});
    
  }

}
