import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { CheckoutRoutingModule } from './pages/checkout-routing.module';

@NgModule({
  imports: [CommonModule, CheckoutRoutingModule],
  declarations: [CheckoutPageComponent],
})
export class CheckoutModule {}
