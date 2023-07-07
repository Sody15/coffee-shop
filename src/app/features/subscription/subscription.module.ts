import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionPageComponent } from './pages/subscription-page/subscription-page.component';
import { SubscriptionRoutingModule } from './pages/subscription-routing.module';
import { SubscriptionCardComponent } from './components/subscription-card/subscription-card.component';
import { SharedModule } from '@app-shared/shared.module';

@NgModule({
  declarations: [SubscriptionPageComponent, SubscriptionCardComponent],
  imports: [CommonModule, SubscriptionRoutingModule, SharedModule],
})
export class SubscriptionModule {}
