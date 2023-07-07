import { Component } from '@angular/core';
import { SUBSCRIPTION_PRODUCTS } from '@app-core/data';
import { Product } from '@app-core/models/product';

@Component({
  selector: 'cof-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss'],
})
export class SubscriptionPageComponent {
  subProducts: Product[] = SUBSCRIPTION_PRODUCTS;
}
