import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/shared/pages.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _pagesService: PagesService) { }

  ngOnInit() {
    this._pagesService.bannerContent.next({ title: 'Register', desc: 'To be able to create, edit or delete super car'});
  }

}
