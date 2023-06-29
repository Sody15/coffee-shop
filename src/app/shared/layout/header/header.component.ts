import { Component, HostListener } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

import { CartState } from '@app-core/state/cart.reducer';
import { toggleCart } from '@app-core/state/cart.actions';
import { selectCartNumItems } from '@app-core/state/cart.selectors';

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

  // Hide/show header based on route
  router$: Observable<any> = this.router.events.pipe(
    tap((event) => {
      if (event instanceof NavigationStart) {
        this.isHidden = noHeaderRoutes.includes(event.url);
      }
    })
  );

  // Set number of products in cart
  cartNumProducts$: Observable<number> = this.store.select(selectCartNumItems);

  constructor(private router: Router, private store: Store<{ cart: CartState }>) {}

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
