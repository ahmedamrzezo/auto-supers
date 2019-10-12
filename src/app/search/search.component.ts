import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: string;

  constructor() { }

  ngOnInit() {
  }
  
  submitSearch(form: NgForm) {
    console.log(form);
  }
  quickSearch() {
    console.log(this.search);
  }

}
