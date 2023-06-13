import { Component } from '@angular/core';
import { PRODUCTS } from 'src/app/core/data';
import { Product } from 'src/app/core/models/product';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { FilterType, ShopState } from './shop.reducer';
import { filterBy } from './shop.actions';

import { add, reset } from 'src/app/shared/components/cart/cart.actions';
import { CartState } from 'src/app/shared/components/cart/cart.reducer';

@Component({
  selector: 'cof-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  products = PRODUCTS;

  filteredProducts!: Product[];
  filter$: Observable<FilterType>;

  constructor(private store: Store<{ cart: CartState; shop: ShopState }>) {
    this.filter$ = this.store
      .select((state) => state.shop.filter)
      .pipe(
        tap((filter) => {
          if (filter === 'all') {
            this.filteredProducts = this.products;
          } else {
            this.filteredProducts = this.products.filter((product) => product.type === filter);
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
