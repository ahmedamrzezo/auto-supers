import { Component, OnInit } from '@angular/core';
import { PagesService } from '../shared/pages.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private pagesService: PagesService) { }

  ngOnInit() {

    this.pagesService.bannerContent.next({title: 'About Supers Auto'});
    
  }

}
