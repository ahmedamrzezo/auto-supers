import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SuperCarService } from '../collection/super-car.service';
import { SuperCar } from '../collection/super-car';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isSearching: boolean;
  showResults = false;

  searchedSupers: SuperCar[] = []; 

  constructor(private _superCarService: SuperCarService) { }

  ngOnInit() {
  }
  
  submitSearch(form: NgForm) {
    console.log(form);
    this.isSearching = true;
    this.showResults = true;
    this.searchedSupers.splice(0 ,this.searchedSupers.length);

    const keyword = form.value.search;
    
    this._superCarService.getSuperCars()
    .subscribe(supers => {
      supers.find(sup => {
        if ( 
          keyword === sup.carCode || 
          keyword === sup.carName.toLocaleLowerCase() ||
          keyword === sup.brandName.toLocaleLowerCase() ||
          keyword === sup.engineDetails.engineType
        ) {
          this.searchedSupers.push(sup);
          return sup;
        }
      })
      this.isSearching = false;
      return this.searchedSupers;
    });
  }

}
