import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Observable, tap } from 'rxjs';

import ShopActions from '../../state/shop.actions';
import { QuantityComponent } from '@app-shared/components/quantity/quantity.component';

import { PRODUCTS } from '@app-core/data';
import { Product } from '@app-core/models/product';
import { CartActions, HeaderActions } from '@app-core/state/cart.actions';
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

  product!: Product | undefined;

  productPageState$: Observable<any> = this.store.pipe(
    select(selectProductPageView),
    tap((state) => (this.product = state?.product))
  );

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
        this.store.dispatch(CartActions.removeItem({ id: this.product.id }));
        return;
      }

      // Update item if qty is not 0
      const { desc, ...cartProduct } = this.product;
      this.store.dispatch(
        CartActions.addItem({
          item: {
            ...cartProduct,
            quantity: qty,
            totalPrice: this.product!.price * qty,
          },
        })
      );

      if (!quantity) {
        // Open Cart
        this.store.dispatch(HeaderActions.toggleCart());
      }
    }
  }

  onProductSelect(productId: number) {
    this.store.dispatch(ShopActions.selectProduct({ productId }));

    this.router.navigate(['/shop/product', productId]);
  }
}
