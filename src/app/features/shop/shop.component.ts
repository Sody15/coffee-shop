import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'cof-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  products: Product[] = [
    { name: 'Coffee 1', price: 23.99 },
    { name: 'Coffee 2', price: 21.99 },
    { name: 'Coffee 3', price: 19.99 },
  ];
  selectedProducts: Product[] = [];
}
