import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgIconsModule } from '@ng-icons/core';
import { heroChevronDown } from '@ng-icons/heroicons/outline';

import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { CheckoutRoutingModule } from './pages/checkout-routing.module';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InfoFormComponent } from './forms/info-form/info-form.component';

const ngIcons = { heroChevronDown };

@NgModule({
  imports: [CommonModule, CheckoutRoutingModule, NgIconsModule.withIcons({ ...ngIcons }), ReactiveFormsModule],
  declarations: [CheckoutPageComponent, TextBoxComponent, DropdownComponent, InfoFormComponent],
})
export class CheckoutModule {}
