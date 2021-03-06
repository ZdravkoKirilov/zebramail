import {trigger, state, style, animate, transition} from '@angular/animations';

export const routeChangeAnimation = trigger('routeChangeAnimation', [
    state('void', style({position: 'fixed', width: '100%'})),
    state('*', style({position: 'fixed', width: '100%'})),
    transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
]);

export const verticalSlide = trigger('verticalSlide', [
    state('*', style({transform: 'translateY(0%)', position: 'fixed'})),
    transition(':enter', [
        style({transform: 'translateY(-200%)'}),
        animate('0.2s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
        style({transform: 'translateY(0%)'}),
        animate('0.2s ease-in-out', style({transform: 'translateY(200%)'}))
    ])
]);