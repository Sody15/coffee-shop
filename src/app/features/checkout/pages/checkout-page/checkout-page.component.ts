import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartProduct, CartState } from 'src/app/shared/components/cart/cart.reducer';
import { Observable } from 'rxjs';
import { InfoFormComponent } from '../../forms/info-form/info-form.component';

@Component({
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent {
  @ViewChild(InfoFormComponent, { static: false }) infoFormComponent!: InfoFormComponent;

  cartProducts$: Observable<CartProduct[]>;

  constructor(private store: Store<{ cart: CartState }>) {
    this.cartProducts$ = this.store.select((state) => state.cart.items);
  }
}
