import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckoutState, Info, ShippingMethod } from '../../checkout.reducer';
import { CartState } from 'src/app/shared/components/cart/cart.reducer';

@Component({
  selector: 'cof-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss'],
})
export class ShippingFormComponent {
  @Input() cartState!: CartState;
  @Input() checkoutState!: CheckoutState;
  @Output() onBack = new EventEmitter<void>();
  @Output() onShippingMethodUpdate = new EventEmitter<string>();

  shippingMethods: ShippingMethod[] = [
    { id: 1, carrier: 'USPS', type: 'standard', name: 'Standard', rate: 0.1, isFree: true },
    { id: 2, carrier: 'USPS', type: 'priority', name: 'USPS Priority Mail', rate: 0.12, isFree: true },
    { id: 3, carrier: 'UPS', type: 'ground', name: 'UPS Ground', rate: 0.14, isFree: true },
    { id: 4, carrier: 'UPS', type: '2nd day', name: 'UPS 2nd Day Air', rate: 0.16 },
    { id: 5, carrier: 'UPS', type: 'next day', name: 'UPS Next Day Air', rate: 0.18 },
  ];

  get shipTo() {
    if (this.checkoutState?.info) {
      const { address, apartment, city, state, zip } = this.checkoutState.info;
      return `${address}, ${apartment ? apartment + ',' : ''} ${city}, ${state} ${zip}`;
    }
    return '';
  }
}
