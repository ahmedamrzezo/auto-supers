import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SuperCarService } from '../collection/super-car.service';
import { SuperCar } from '../collection/super-car';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isSearching: boolean;
  showResults = false;
  searchKeyword: string;
  searchError: string;

  searchedSupers: SuperCar[] = []; 

  constructor(private _superCarService: SuperCarService) { }

  ngOnInit() {
  }
  
  submitSearch() {
    this.isSearching = true;
    this.showResults = true;
    
    // emptying the searched arrays before every search
    this.searchedSupers.splice(0 ,this.searchedSupers.length);
    
    // search for supercar
    this._superCarService.getSuperCars()
    .pipe(
      take(1)
    )
    .subscribe(supers => {

      // search with Regex 
      if (this.searchKeyword.includes('-')) {
        const keyword = this.searchKeyword.split('-');
        this.searchKeyword = keyword.join(' ');
      }
      const regex = new RegExp(
        `${this.searchKeyword}+`,
        'i'
        );
      
      this.searchedSupers = supers.filter((sup) => {
        if ( 
          sup.carName.match(regex) !== null ||
          sup.engineDetails.engineType.match(regex) !== null
        ) {
          return sup;
        };
      })

      // stop loading when done
      this.isSearching = false;
      return this.searchedSupers;
    },
    err => {
      this.isSearching = false;
      this.searchError = `An Error Occurred, ${err.name}`;
      throw new Error(`An Error Occurred, ${err.name}`);
    }
    );
  }

}
