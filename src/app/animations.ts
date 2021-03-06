import { trigger, transition, style, animate, state } from '@angular/animations';

export const bannerAnimation = 
  trigger('routeAnimation', [
    state('HomePage', style({
      height: '100vh'
    })),
    state('OtherPage', style({
      height: '40vh'
    })),
    transition('HomePage <=> OtherPage', [
      animate('500ms cubic-bezier(0.55, 0.06, 0.68, 0.19)')
    ])
  ]);

export const fadeInAnimation = 
  trigger('fadeIn', [
    state('shown', style({
      opacity: 1
    })),

    transition('void => *', [
      style({
        opacity: 0
      }),
      animate('1s cubic-bezier(0.55, 0.06, 0.68, 0.19)')
    ])
  ]);

export const navMobileToggle = 
  trigger('toggleNav', [
    state('begin', style({})),
    state('end', style({
      width: '240px',
      height: 'auto',
    })),

    transition('begin => end', [
      animate('300ms cubic-bezier(0.55, 0.06, 0.68, 0.19)')
    ])
  ]);

export const deleteAnim = 
  trigger('deleteFade', [
    state('*', style({height: '60px'})),
    state('void', style({opacity: 0, height: 0})),
    transition('* => void', [
      animate('500ms cubic-bezier(0.55, 0.06, 0.68, 0.19)')
    ])
  ]);