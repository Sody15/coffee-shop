import { Component } from '@angular/core';
import { PRODUCTS } from 'src/app/core/data';
import { Product } from 'src/app/core/models/product';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FilterType, ShopState } from '../../shop.reducer';
import { filterBy } from '../../shop.actions';

import { add, reset } from 'src/app/shared/components/cart/cart.actions';
import { CartState } from 'src/app/shared/components/cart/cart.reducer';

@Component({
  selector: 'cof-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  products = PRODUCTS;

  filter$: Observable<FilterType>;
  filteredProducts$!: Observable<Product[]>;

  constructor(private store: Store<{ cart: CartState; shop: ShopState }>) {
    this.filter$ = this.store.select((state) => state.shop.filter);

    this.filteredProducts$ = this.filter$.pipe(
      map((filter) => {
        if (filter === 'all') {
          return this.products;
        } else {
          return this.products.filter((product) => product.type === filter);
        }
      })
    );
  }

  onSelect(filter: FilterType) {
    this.store.dispatch(filterBy({ filter }));
  }

  reset() {
    this.store.dispatch(reset());
  }

  addProductToCart(newItem: Product) {
    this.store.dispatch(add({ newItem }));
  }

  onFilterChange(filter: FilterType) {
    this.store.dispatch(filterBy({ filter }));
  }
}
