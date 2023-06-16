import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cof-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent {
  @Input() qty: number = 1;

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
