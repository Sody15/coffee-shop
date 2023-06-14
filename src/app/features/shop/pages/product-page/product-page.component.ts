import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { PRODUCTS } from 'src/app/core/data';
import { Product } from 'src/app/core/models/product';
import { selectProduct } from '../../shop.actions';

@Component({
  selector: 'cof-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  product!: Product;

  bottomProducts: Product[] = PRODUCTS.slice(0, 4);

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id');
      if (productId) {
        this.product = PRODUCTS.filter((p) => p.id === +productId)[0];
      }
    });
  }

  onProductSelect(productId: number) {
    this.store.dispatch(selectProduct({ productId }));

    this.router.navigate(['/shop/product', productId]);
  }
}
