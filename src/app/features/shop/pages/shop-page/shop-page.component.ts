import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PRODUCTS } from 'src/app/core/data';
import { Product } from 'src/app/core/models/product';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FilterType, ShopState } from '../../state/shop.reducer';
import { filterBy, selectProduct } from '../../state/shop.actions';

@Component({
  selector: 'cof-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
})
export class ShopPageComponent {
  products = PRODUCTS;

  filter$: Observable<FilterType>;
  filteredProducts$!: Observable<Product[]>;

  constructor(private store: Store<{ shop: ShopState }>, private router: Router) {
    this.filter$ = this.store.pipe(select((state) => state.shop.filter));

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

  onFilterChange(filter: FilterType) {
    this.store.dispatch(filterBy({ filter }));
  }

  onProductSelect(productId: number) {
    this.store.dispatch(selectProduct({ productId }));

    this.router.navigate(['/shop/product', productId]);
  }
}
