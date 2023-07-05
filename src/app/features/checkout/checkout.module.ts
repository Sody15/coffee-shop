import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgIconsModule } from '@ng-icons/core';
import { heroChevronDown } from '@ng-icons/heroicons/outline';

import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { CheckoutRoutingModule } from './pages/checkout-routing.module';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InfoFormComponent } from './forms/info-form/info-form.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { StoreModule } from '@ngrx/store';
import { checkoutReducer } from './state/checkout.reducer';
import { ShippingFormComponent } from './forms/shipping-form/shipping-form.component';
import { RadioComponent } from './components/radio/radio.component';
import { PaymentFormComponent } from './forms/payment-form/payment-form.component';
import { ReviewBlockComponent } from './components/review-block/review-block.component';

const ngIcons = { heroChevronDown };

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    NgIconsModule.withIcons({ ...ngIcons }),
    ReactiveFormsModule,
    StoreModule.forFeature('checkout', checkoutReducer),
  ],
  declarations: [
    CheckoutPageComponent,
    TextBoxComponent,
    DropdownComponent,
    InfoFormComponent,
    StepperComponent,
    ShippingFormComponent,
    RadioComponent,
    PaymentFormComponent,
    ReviewBlockComponent,
  ],
})
export class CheckoutModule {}
