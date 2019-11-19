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
       this.searchedSupers = supers.filter((sup) => {
        //  string to string matching
        if ( 
          this.searchKeyword === sup.carName ||
          this.searchKeyword === sup.brandName ||
          this.searchKeyword === sup.engineDetails.engineType
        ) {
          return sup;
        }

        // Regex Approach

        // if ( 
        //   sup.carName.match(this.searchKeyword) !== null ||
        //   sup.brandName.match(this.searchKeyword) !== null ||
        //   sup.engineDetails.engineType.match(this.searchKeyword) !== null
        // ) {
        //   return sup;
        // };
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
