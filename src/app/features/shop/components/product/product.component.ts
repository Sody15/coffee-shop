import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'cof-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: Product;

  @Output() onSelect = new EventEmitter<number>();
}
