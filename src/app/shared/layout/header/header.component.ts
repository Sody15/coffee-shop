import { Component, HostListener } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartState } from '../../components/cart/cart.reducer';

@Component({
  selector: 'cof-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isTransparent = true;
  showCart = false;
  isMenuOpen = false;

  cartNumProducts$!: Observable<number>;

  constructor(private router: Router, private store: Store<{ cart: CartState }>) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isTransparent = true;
      }
    });

    this.cartNumProducts$ = this.store.select((state) => state.cart.items.length);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    this.isTransparent = scrollPosition < 100;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
