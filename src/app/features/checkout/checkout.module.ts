import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { CheckoutRoutingModule } from './pages/checkout-routing.module';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, CheckoutRoutingModule, FormsModule],
  declarations: [CheckoutPageComponent, TextBoxComponent],
})
export class CheckoutModule {}
