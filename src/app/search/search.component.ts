import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchKeyword: string;
  isSearching: boolean;

  constructor() { }

  ngOnInit() {
  }
  
  submitSearch(form: NgForm) {
    console.log(form);
    this.isSearching = true;
    setTimeout( () => this.isSearching = false, 2000 );
  }
  quickSearch() {
    console.log(this.searchKeyword);
  }

}
