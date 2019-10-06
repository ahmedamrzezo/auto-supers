import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bannerAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    bannerAnimation
  ]
})
export class AppComponent {
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
