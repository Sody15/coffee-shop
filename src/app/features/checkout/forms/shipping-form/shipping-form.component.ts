import { Component, EventEmitter, Input, Output } from '@angular/core';

import { shippingMethods } from '@app-core/data';
import { ShippingMethod } from '@app-core/models/shipping-method';

@Component({
  selector: 'cof-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss'],
})
export class ShippingFormComponent {
  @Input() shippingMethodId!: string;
  @Input() subTotal!: number;

  @Output() onBack = new EventEmitter<void>();
  @Output() onShippingMethodIdUpdate = new EventEmitter<string>();
  @Output() onSubmit = new EventEmitter<void>();

  shippingMethods: ShippingMethod[] = shippingMethods;

  onInputChange(value: any): void {
    this.onShippingMethodIdUpdate.emit(value);
  }
}
