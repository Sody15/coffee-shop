import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductType } from '@app-core/models/product';

@Component({
  selector: 'cof-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent {
  @Input() qty: number = 1;
  @Input() disableIncrement: boolean = false;

  @Output() onUpdateQty = new EventEmitter<number>();

  readonly maxQty = 10;

  increment() {
    if (this.qty < this.maxQty) {
      this.qty++;
      this.onUpdateQty.emit(this.qty);
    }
  }

  decrement() {
    if (this.qty > 0) {
      this.qty--;
      this.onUpdateQty.emit(this.qty);
    }
  }
}
