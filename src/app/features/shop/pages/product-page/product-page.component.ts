import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { PRODUCTS } from 'src/app/core/data';
import { Product } from 'src/app/core/models/product';
import { selectProduct } from '../../shop.actions';
import { add } from 'src/app/shared/components/cart/cart.actions';
import { Observable, map, switchMap, tap } from 'rxjs';
import { CartState } from 'src/app/shared/components/cart/cart.reducer';

@Component({
  selector: 'cof-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  product!: Product | undefined;

  bottomProducts: Product[] = PRODUCTS.slice(0, 4);

  quantity$!: Observable<string>;

  constructor(private store: Store<{ cart: CartState }>, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // this.route.paramMap
    //   .pipe(
    //     map((params) => {
    //       const productId = params.get('id');
    //       if (productId) {
    //         this.product = PRODUCTS.filter((p) => p.id === +productId)[0];
    //       }
    //       return productId;
    //     })
    //   )
    //   .subscribe();

    // // Get item quantity
    // this.quantity$ = this.store
    //   .select((state) => state.cart.items)
    //   .pipe(
    //     map((cartProducts) => {
    //       console.log(cartProducts);
    //       const product = cartProducts.filter((cartProd) => cartProd.id === +productId)[0];
    //       console.log(product);
    //       return product ? product.quantity : 0;
    //     }),
    //     tap(console.log)
    //   );

    this.quantity$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const productId = params.get('id');
        // Set product
        this.product = productId ? PRODUCTS.filter((p) => p.id === +productId!)[0] : undefined;
        return this.store
          .select((state) => state.cart.items)
          .pipe(
            map((cartProducts) => {
              const cartProduct = productId ? cartProducts.filter((cartProd) => cartProd.id === +productId)[0] : null;
              return cartProduct ? cartProduct.quantity.toString() : '0';
            })
          );
      }),
      tap((val) => console.log('qty- ' + val))
    );
  }

  addToCart(qty: number) {
    if (this.product) {
      const { desc, ...cartProduct } = this.product;
      this.store.dispatch(add({ item: { ...cartProduct, quantity: qty, totalPrice: this.product.price * qty } }));
    }
  }

  onProductSelect(productId: number) {
    this.store.dispatch(selectProduct({ productId }));

    this.router.navigate(['/shop/product', productId]);
  }
}
