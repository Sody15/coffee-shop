import { Component, HostListener } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartState } from '../../state/cart.reducer';
import { toggleCart } from '../../state/cart.actions';
import { NavigationStart, Router } from '@angular/router';
import { selectCartNumItems } from '@app-shared/state/cart.selectors';

const noHeaderRoutes = ['/checkout'];

@Component({
  selector: 'cof-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isHidden = false;
  isTransparent = true;
  showCart = false;
  isMenuOpen = false;

  cartNumProducts$!: Observable<number>;

  constructor(private router: Router, private store: Store<{ cart: CartState }>) {
    // Hide/show based on route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isHidden = noHeaderRoutes.includes(event.url);
      }
    });

    // Set num products in cart
    this.cartNumProducts$ = this.store.select(selectCartNumItems);
  }

  // Toggle header transparency based on scroll pos
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this.isHidden) {
      const scrollPosition = window.scrollY;
      this.isTransparent = scrollPosition < 30;
    }
  }

  // Toggle cart
  toggleCart() {
    this.store.dispatch(toggleCart());
  }
}
