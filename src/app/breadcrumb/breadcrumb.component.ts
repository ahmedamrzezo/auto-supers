import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import {filter} from 'rxjs/operators';
import { Breadcrumb } from './breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: Breadcrumb[] = [];
  urlsBreadcrumb: Breadcrumb[] = [];

  home: Breadcrumb = {
    name: 'home',
    url: {
      path: ['/'],
      params: {}
    }
  };

  @Output() hideBreadcrumb = new Subject<boolean>();

  constructor( private router: Router ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd)
    ).subscribe((ev) => {
      this.readUrls();
    });
  }

  setBreadcrumb() {
    if ( this.urlsBreadcrumb.length === 0 ) {
      this.breadcrumbs = [];
      return;
    } 
    this.breadcrumbs = [this.home, ...this.urlsBreadcrumb];
  }

  protected readUrls() {
    const urlsArray = location.pathname.split('/');
    this.urlsBreadcrumb = [];

    for ( let urlName of urlsArray ) {
      if (urlName !== '' ) {
        this.urlsBreadcrumb.push({
          name: urlName,
          url: {
            path: ['/' + urlName],
            params: {}
          }
        });
      }
    }
    this.setBreadcrumb();
  }

}

/** TODO:
 * --Fix breadcrumb for params links 
 */