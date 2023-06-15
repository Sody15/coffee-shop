import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartProduct, CartState } from './cart.reducer';
import { removeItem, toggleCart } from './cart.actions';

@Component({
  selector: 'cof-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartProducts$: Observable<CartProduct[]>;
  cartSubTotal$: Observable<string>;

  constructor(private store: Store<{ cart: CartState }>) {
    this.cartProducts$ = this.store.select((state) => state.cart.items);

    this.cartSubTotal$ = this.cartProducts$.pipe(
      map((cartProducts) => {
        const subTotal = cartProducts.reduce((acc, cur) => acc + cur.totalPrice, 0);
        return subTotal.toString();
      })
    );
  }

  onRemove(id: number) {
    this.store.dispatch(removeItem({ id }));
  }

  onClose() {
    this.store.dispatch(toggleCart());
  }
}
