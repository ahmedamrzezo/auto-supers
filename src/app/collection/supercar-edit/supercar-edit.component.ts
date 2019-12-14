import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/shared/pages.service';

@Component({
  selector: 'app-supercar-edit',
  templateUrl: './supercar-edit.component.html',
  styleUrls: ['./supercar-edit.component.scss']
})
export class SupercarEditComponent implements OnInit {

  constructor(private _pagesService: PagesService) { }

  ngOnInit() {

    this._pagesService.bannerContent.next({title: 'Create/Edit a Super'});
    
  }

  /** TODO:
   * edit super detail
   * save data
   * cancel edit
   * can deactivate route to ask permission to leave page
   */

}
