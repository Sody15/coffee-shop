import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'cof-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent implements OnChanges {
  @Input() qty: number = 0;

  @Output() onUpdateQty = new EventEmitter<number>();

  btnText!: string;

  readonly maxQty = 10;

  ngOnChanges() {
    this.updateBtnText();
  }

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

  addToCart() {
    if (this.qty) {
      this.onUpdateQty.emit(this.qty);
    }
  }

  updateBtnText() {
    this.btnText = this.qty > 0 ? 'Added to Cart' : 'Add to Cart';
  }
}
