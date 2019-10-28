import { Component, OnInit } from '@angular/core';
import { PagesService } from '../shared/pages.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private _pagesService: PagesService) { }

  ngOnInit() {

    this._pagesService.bannerContent.next({title: '404, Page Not Found!'});
    
  }

}
