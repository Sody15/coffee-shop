import { Component } from '@angular/core';
import { SUBSCRIPTION_PRODUCTS } from '@app-core/data';
import { Product } from '@app-core/models/product';
import { CartActions, HeaderActions } from '@app-core/state/cart.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'cof-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss'],
})
export class SubscriptionPageComponent {
  subProducts: Product[] = SUBSCRIPTION_PRODUCTS;

  constructor(private store: Store) {}

  addItemToCart(item: Product) {
    const updatedItem = { ...item, totalPrice: item!.price, quantity: 1 };
    this.store.dispatch(CartActions.addItem({ item: updatedItem }));

    this.store.dispatch(HeaderActions.toggleCart());
  }
}
