import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Info } from '../../state/checkout.reducer';

import { shippingMethods } from '@app-core/data';
import { ShippingMethod } from '@app-core/models/shipping-method';

@Component({
  selector: 'cof-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent {
  @Input() info: Info | undefined;
  @Input() shippingMethodId!: string;
  @Input() subTotal!: number;

  @Output() onBack = new EventEmitter<void>();
  @Output() onShippingMethodIdUpdate = new EventEmitter<string>();
  @Output() onSubmit = new EventEmitter<void>();

  shippingMethods: ShippingMethod[] = shippingMethods;

  billing: 'same' | 'different' = 'same';

  onInputChange(value: any): void {
    this.onShippingMethodIdUpdate.emit(value);
  }
}
