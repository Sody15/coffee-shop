import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, map, switchMap } from 'rxjs';

import { PRODUCTS } from 'src/app/core/data';
import { Product } from 'src/app/core/models/product';
import { selectProduct } from '../../shop.actions';
import { addItem, removeItem, toggleCart } from 'src/app/shared/components/cart/cart.actions';
import { CartState } from 'src/app/shared/components/cart/cart.reducer';
import { QuantityComponent } from 'src/app/shared/components/quantity/quantity.component';

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
        return this.store
          .select((state) => state.cart.items)
          .pipe(
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
        return this.store
          .select((state) => state.cart.items)
          .pipe(
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
