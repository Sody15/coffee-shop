import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cof-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent {
  @Input() qty: number = 0;

  @Output() onAddToCart = new EventEmitter<number>();

  btnText = 'Add to Cart';

  readonly maxQty = 10;

  increment() {
    if (this.qty < this.maxQty) {
      this.qty++;
    }
  }

  decrement() {
    if (this.qty > 0) {
      this.qty--;
    }
  }

  addToCart() {
    if (this.qty) {
      this.btnText = 'Added to Cart';
      this.onAddToCart.emit(this.qty);
    }
  }
}
