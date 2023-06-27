import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Observable, map, switchMap } from 'rxjs';

import { selectProduct } from '../../state/shop.actions';

import { PRODUCTS } from '@app-core/data';
import { Product } from '@app-core/models/product';

import { addItem, removeItem, toggleCart } from '@app-shared/state/cart.actions';
import { CartState } from '@app-shared/state/cart.reducer';
import { QuantityComponent } from '@app-shared/components/quantity/quantity.component';
import { selectCartItems } from '@app-shared/state/cart.selectors';

@Component({
  selector: 'cof-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  @ViewChild(QuantityComponent, { static: false }) qtyComponent!: QuantityComponent;

  quantity$!: Observable<string>;
  inCart$!: Observable<'true' | 'false'>;

  product!: Product | undefined;
  bottomProducts: Product[] = PRODUCTS.slice(0, 4);

  constructor(private store: Store<{ cart: CartState }>, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Load correct product - then set product quantity
    this.quantity$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const productId = params.get('id');
        // Set product
        this.product = productId ? PRODUCTS.filter((p) => p.id === +productId!)[0] : undefined;
        // Get quantity
        return this.store.pipe(
          select(selectCartItems),
          map((cartProducts) => {
            const cartProduct = productId ? cartProducts.filter((cartProd) => cartProd.id === +productId)[0] : null;
            return cartProduct ? cartProduct.quantity.toString() : '1';
          })
        );
      })
    );

    this.inCart$ = this.route.paramMap.pipe(
      switchMap((params) => {
        // Get Product Id
        const productId = params.get('id');
        // Get quantity
        return this.store.pipe(
          select(selectCartItems),
          map((cartProducts) => {
            const inCart = cartProducts.filter((cartProduct) => cartProduct.id === +productId!);
            return inCart.length ? 'true' : 'false';
          })
        );
      })
    );
  }

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
