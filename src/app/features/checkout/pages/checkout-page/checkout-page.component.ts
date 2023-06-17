import { Component } from '@angular/core';
import { stateSalesTax } from '../../checkout-constants';
import { Store } from '@ngrx/store';
import { CartProduct, CartState } from 'src/app/shared/components/cart/cart.reducer';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent {
  stateSalesTax = stateSalesTax;
  cartProducts$: Observable<CartProduct[]>;

  constructor(private store: Store<{ cart: CartState }>) {
    this.cartProducts$ = this.store.select((state) => state.cart.items);
  }
}
