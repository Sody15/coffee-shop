import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { CartProduct, CartState } from '@app-core/state/cart.reducer';
import { removeItem, toggleCart, updateItem } from '@app-core/state/cart.actions';
import { CartAndSubTotal, selectCartAndSubTotal } from '@app-core/state/cart.selectors';

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
  cartState$: Observable<CartAndSubTotal> = this.store.pipe(select(selectCartAndSubTotal));

  constructor(private store: Store<{ cart: CartState }>, private router: Router) {}

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
