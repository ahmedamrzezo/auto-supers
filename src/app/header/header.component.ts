import { Component, OnInit } from '@angular/core';
import { navMobileToggle } from '../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [navMobileToggle]
})
export class HeaderComponent implements OnInit {

  navIsOpened = false;

  constructor() { }

  ngOnInit() {
  }

}
