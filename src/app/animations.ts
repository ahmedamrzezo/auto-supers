import { trigger, transition, style, animate, state } from '@angular/animations';

export const bannerAnimation = 
  trigger('routeAnimation', [
    state('HomePage', style({
      height: '100vh'
    })),
    state('OtherPage', style({
      height: '40vh'
    })),
    transition('HomePage => OtherPage', [
      animate('500ms cubic-bezier(0.55, 0.06, 0.68, 0.19)')
    ]),
    transition('OtherPage => HomePage', [
      animate('500ms cubic-bezier(0.55, 0.06, 0.68, 0.19)')
    ]),
  ]);