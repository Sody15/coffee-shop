import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Info } from '../../state/checkout.reducer';
import { ShippingMethod } from '@app-core/models/shipping-method';

@Component({
  selector: 'cof-review-block',
  templateUrl: './review-block.component.html',
  styleUrls: ['./review-block.component.scss'],
})
export class ReviewBlockComponent {
  @Input() info!: Info | undefined;
  @Input() shippingMethod?: ShippingMethod;
  @Input() shippingCost!: number;

  @Output() onStepperChange = new EventEmitter<number>();

  get shipTo() {
    if (this.info) {
      const { address, apartment, city, state, zip } = this.info;
      return `${address}, ${apartment ? apartment + ',' : ''} ${city}, ${state} ${zip}`;
    }
    return '';
  }
}
