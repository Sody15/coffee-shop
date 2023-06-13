import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'cof-coffee-bag',
  templateUrl: './coffee-bag.component.html',
  styleUrls: ['./coffee-bag.component.scss'],
})
export class CoffeeBagComponent {
  @Input() product!: Product;

  @Output() onAdd = new EventEmitter<Product>();
}
