import { Component, HostListener } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartState } from '../../components/cart/cart.reducer';
import { toggleCart } from '../../components/cart/cart.actions';

const notTransparentRoutes = ['/checkout'];

@Component({
  selector: 'cof-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  canBeTransparent!: boolean;
  isTransparent = true;
  showCart = false;
  isMenuOpen = false;

  cartNumProducts$!: Observable<number>;

  constructor(private router: Router, private store: Store<{ cart: CartState }>) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isTransparent = !notTransparentRoutes.includes(event.url);
        this.canBeTransparent = this.isTransparent;
      }
    });

    this.cartNumProducts$ = this.store.select((state) => state.cart.items.length);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.canBeTransparent) {
      const scrollPosition = window.pageYOffset;
      this.isTransparent = scrollPosition < 30;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleCart() {
    this.store.dispatch(toggleCart());
  }
}
