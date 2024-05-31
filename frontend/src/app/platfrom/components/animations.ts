import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
    ]),
    transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 })),
    ]),
]);

export const slideInOutAnimation = trigger('slideInOut', [
    transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('150ms ease-in', style({ transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
        animate('200ms ease-out', style({ transform: 'translateX(0%)' }))
    ])
]);



export const slideInOutAnimationForm = trigger('slideInOutForm', [
    transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
        animate('0ms ease-out', style({ transform: 'translateX(0%)' }))
    ])
]);


