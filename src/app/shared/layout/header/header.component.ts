import { Component, HostListener } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

import { CartState } from '@app-core/state/cart.reducer';
import { HeaderActions } from '@app-core/state/cart.actions';
import { selectCartNumItems } from '@app-core/state/cart.selectors';
import { selectUrl } from 'src/app/routing.selectors';
import { RouterState } from '@ngrx/router-store';

@Component({
  selector: 'cof-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isTransparent = true;
  showCart = false;
  isMenuOpen = false;

  // Set number of products in cart
  cartNumProducts$: Observable<number> = this.store.select(selectCartNumItems);

  constructor(private store: Store<{ cart: CartState }>) {}

  // Toggle header transparency based on scroll pos
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    this.isTransparent = scrollPosition < 30;
  }

  // Toggle cart
  toggleCart() {
    this.store.dispatch(HeaderActions.toggleCart());
  }
}
