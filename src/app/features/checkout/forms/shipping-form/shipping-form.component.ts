import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Info, ShippingMethod, shippingMethods } from '../../state/checkout.reducer';

@Component({
  selector: 'cof-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss'],
})
export class ShippingFormComponent {
  @Input() info: Info | undefined;
  @Input() shippingMethodId!: string;
  @Input() subTotal!: number;

  @Output() onBack = new EventEmitter<void>();
  @Output() onShippingMethodIdUpdate = new EventEmitter<string>();
  @Output() onSubmit = new EventEmitter<void>();

  shippingMethods: ShippingMethod[] = shippingMethods;

  get shipTo() {
    if (this.info) {
      const { address, apartment, city, state, zip } = this.info;
      return `${address}, ${apartment ? apartment + ',' : ''} ${city}, ${state} ${zip}`;
    }
    return '';
  }

  onInputChange(value: any): void {
    this.onShippingMethodIdUpdate.emit(value);
  }
}
