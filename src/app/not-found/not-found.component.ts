import { Component, OnInit } from '@angular/core';
import { PagesService } from '../shared/pages.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private pagesService: PagesService) { }

  ngOnInit() {

    this.pagesService.bannerContent.next({title: '404, Page Not Found!'});
    
  }

}
