import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { selectProduct } from '../../state/shop.actions';
import { QuantityComponent } from '@app-shared/components/quantity/quantity.component';

import { PRODUCTS } from '@app-core/data';
import { Product } from '@app-core/models/product';
import { addItem, removeItem, toggleCart } from '@app-core/state/cart.actions';
import { CartState } from '@app-core/state/cart.reducer';
import { selectProductPageView } from '@app-core/state/cart.selectors';
import { RouterState } from '@ngrx/router-store';

@Component({
  selector: 'cof-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  @ViewChild(QuantityComponent, { static: false }) qtyComponent!: QuantityComponent;

  productPageState$: Observable<any> = this.store.pipe(select(selectProductPageView));

  product!: Product | undefined;
  bottomProducts: Product[] = PRODUCTS.slice(0, 4);

  constructor(private store: Store<{ router: RouterState; cart: CartState }>, private router: Router) {}

  addToCart(quantity?: number, inCart?: 'true' | 'false') {
    if (quantity && inCart === 'false') {
      return;
    }
    if (this.product) {
      const qty = quantity ? quantity : this.qtyComponent.qty;

      // Remove item if qty is 0
      if (qty === 0) {
        this.store.dispatch(removeItem({ id: this.product.id }));
        return;
      }

      // Update item if qty is not 0
      const { desc, ...cartProduct } = this.product;
      this.store.dispatch(
        addItem({
          item: {
            ...cartProduct,
            quantity: qty,
            totalPrice: this.product!.price * qty,
          },
        })
      );

      if (!quantity) {
        // Open Cart
        this.store.dispatch(toggleCart());
      }
    }
  }

  onProductSelect(productId: number) {
    this.store.dispatch(selectProduct({ productId }));

    this.router.navigate(['/shop/product', productId]);
  }
}
