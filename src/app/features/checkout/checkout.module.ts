import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { CheckoutRoutingModule } from './pages/checkout-routing.module';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, CheckoutRoutingModule, FormsModule],
  declarations: [CheckoutPageComponent, TextInputComponent],
})
export class CheckoutModule {}
