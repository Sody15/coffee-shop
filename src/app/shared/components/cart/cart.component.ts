import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartProduct, CartState } from './cart.reducer';
import { removeItem, toggleCart, updateItem } from './cart.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'cof-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartProducts$: Observable<CartProduct[]>;
  cartSubTotal$: Observable<string>;

  constructor(private store: Store<{ cart: CartState }>, private router: Router) {
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

  toggle() {
    this.store.dispatch(toggleCart());
  }

  updateQty(updatedQty: number, cartProduct: CartProduct) {
    // Remove item if qty is 0
    if (updatedQty === 0) {
      this.store.dispatch(removeItem({ id: cartProduct.id }));
      return;
    }

    // Else- update qty and totalPrice
    const updatedItem = { ...cartProduct, quantity: updatedQty, totalPrice: cartProduct.price * updatedQty };
    this.store.dispatch(updateItem({ updatedItem }));
  }

  onCheckout() {
    this.toggle();
    this.router.navigate(['/checkout']);
  }
}
