import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

import { Store } from '@ngrx/store';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartProduct, CartState } from './cart.reducer';
import { removeItem, toggleCart, updateItem } from './cart.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'cof-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ right: '-100%', opacity: 0 }),
        animate('400ms', style({ right: '0', opacity: 1 })),
      ]),
      transition(':leave', [style({ right: 0, opacity: 1 }), animate('400ms', style({ right: '-100%', opacity: 0 }))]),
    ]),
  ],
})
export class CartComponent {
  isCartOpen$: Observable<boolean>;
  cartProducts$: Observable<CartProduct[]>;
  cartState$: Observable<any>;

  cartSubTotal$: Observable<string>;

  constructor(private store: Store<{ cart: CartState }>, private router: Router) {
    this.isCartOpen$ = this.store.select((state) => state.cart.isOpen);

    this.cartProducts$ = this.store.select((state) => state.cart.items);

    this.cartSubTotal$ = this.cartProducts$.pipe(
      map((cartProducts) => {
        const subTotal = cartProducts.reduce((acc, cur) => acc + cur.totalPrice, 0);
        return subTotal.toString();
      })
    );

    this.cartState$ = combineLatest([this.isCartOpen$, this.cartProducts$]).pipe(
      map(([isCartOpen, cartProducts]) => ({ isCartOpen, cartProducts }))
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
