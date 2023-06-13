import { Component } from '@angular/core';
import { PRODUCTS } from 'src/app/core/data';
import { Product } from 'src/app/core/models/product';
import { Store } from '@ngrx/store';

import { add, reset } from 'src/app/shared/components/cart/cart.actions';

@Component({
  selector: 'cof-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  products = PRODUCTS;
  constructor(private store: Store<{ cart: Product[] }>) {}

  reset() {
    this.store.dispatch(reset());
  }

  addProductToCart(newItem: Product) {
    this.store.dispatch(add({ newItem }));
  }
}
