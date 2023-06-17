import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

import { Store } from '@ngrx/store';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartProduct, CartState } from './cart.reducer';
import { removeItem, toggleCart, updateItem } from './cart.actions';
import { Router } from '@angular/router';

type State = {
  isCartOpen: boolean;
  cartProducts: CartProduct[];
  cartSubTotal: string;
};

@Component({
  selector: 'cof-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [style({ right: '-100%' }), animate('400ms', style({ right: '0' }))]),
      transition(':leave', [style({ right: 0 }), animate('400ms', style({ right: '-100%' }))]),
    ]),
  ],
})
export class CartComponent {
  isCartOpen$: Observable<boolean>;
  cartProducts$: Observable<CartProduct[]>;
  cartSubTotal$: Observable<string>;

  cartState$: Observable<State>;

  constructor(private store: Store<{ cart: CartState }>, private router: Router) {
    this.isCartOpen$ = this.store.select((state) => state.cart.isOpen);

    this.cartProducts$ = this.store.select((state) => state.cart.items);

    this.cartSubTotal$ = this.cartProducts$.pipe(
      map((cartProducts) => {
        const subTotal = cartProducts.reduce((acc, cur) => acc + cur.totalPrice, 0);
        return subTotal.toString();
      })
    );

    this.cartState$ = combineLatest([this.isCartOpen$, this.cartProducts$, this.cartSubTotal$]).pipe(
      map(([isCartOpen, cartProducts, cartSubTotal]) => ({ isCartOpen, cartProducts, cartSubTotal }))
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

  onCheckout(numItemsInCart: number) {
    if (numItemsInCart > 0) {
      this.toggle();
      this.router.navigate(['/checkout']);
    }
  }
}
