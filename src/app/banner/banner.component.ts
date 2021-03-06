import { Component, OnInit } from '@angular/core';
import { PagesService } from '../shared/pages.service';
import { fadeInAnimation } from '../animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [fadeInAnimation]
})
export class BannerComponent implements OnInit {
  bannerContent: {title: string, desc?: string};

  constructor(private _pagesService: PagesService) { }

  ngOnInit() {
    this._pagesService.bannerContent.subscribe(
      content => {
        this.bannerContent = content;
      }
    );
  }

}
