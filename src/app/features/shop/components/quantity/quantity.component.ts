import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cof-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent implements OnInit {
  @Input() qty: number = 0;

  @Output() onUpdateQty = new EventEmitter<number>();

  btnText!: string;

  readonly maxQty = 10;

  ngOnInit() {
    this.updateBtnText();
  }

  increment() {
    if (this.qty < this.maxQty) {
      this.qty++;
      this.onUpdateQty.emit(this.qty);
    }
    this.updateBtnText();
  }

  decrement() {
    if (this.qty > 0) {
      this.qty--;
      this.onUpdateQty.emit(this.qty);
    }
    this.updateBtnText();
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
