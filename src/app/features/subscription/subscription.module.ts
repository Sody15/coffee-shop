import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionPageComponent } from './pages/subscription-page/subscription-page.component';
import { SubscriptionRoutingModule } from './pages/subscription-routing.module';

@NgModule({
  declarations: [SubscriptionPageComponent],
  imports: [CommonModule, SubscriptionRoutingModule],
})
export class SubscriptionModule {}
