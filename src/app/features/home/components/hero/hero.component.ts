import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'cof-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('bounceAnimation', [
      transition('* => bounce', [
        animate(
          '2s',
          keyframes([
            style({ transform: 'translateY(0)', offset: 0 }),
            style({ transform: 'translateY(20px)', offset: 0.5 }),
            style({ transform: 'translateY(0)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class HeroComponent {}
