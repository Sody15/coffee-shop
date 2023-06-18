import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Info } from '../../checkout.reducer';

@Component({
  selector: 'cof-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss'],
})
export class ShippingFormComponent {
  @Input() infoState!: Info | undefined;
  @Output() onBack = new EventEmitter<void>();

  get shipTo() {
    if (this.infoState) {
      const { address, apartment, city, state, zip } = this.infoState;
      return `${address}, ${apartment ? apartment + ',' : ''} ${city}, ${state} ${zip}`;
    }
    return '';
  }
}
