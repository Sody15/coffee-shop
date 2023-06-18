import { Component, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'cof-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  animations: [
    trigger('slideInRight', [
      transition(':enter', [style({ left: '-100%' }), animate('400ms', style({ left: '0' }))]),
      transition(':leave', [style({ left: 0 }), animate('400ms', style({ left: '-100%' }))]),
    ]),
  ],
})
export class MobileMenuComponent {
  @Input() isMenuOpen = false;

  toggle() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
