import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartProduct, CartState } from './cart.reducer';
import { removeItem } from './cart.actions';

@Component({
  selector: 'cof-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  selectedProducts$: Observable<CartProduct[]>;

  constructor(private store: Store<{ cart: CartState }>) {
    this.selectedProducts$ = this.store.select((state) => state.cart.items);
  }

  onRemove(id: number) {
    this.store.dispatch(removeItem({ id }));
  }
}
