import { Component, OnInit } from '@angular/core';
import { PagesService } from '../shared/pages.service';
import { fadeInAnimation } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation]
})
export class HomeComponent implements OnInit {

  constructor(private pagesService: PagesService) { }

  ngOnInit() {

    this.pagesService.bannerContent.next(null);

  }

}
