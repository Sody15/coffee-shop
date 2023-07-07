import { Component, Input } from '@angular/core';
import { Product } from '@app-core/models/product';

@Component({
  selector: 'cof-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.scss'],
})
export class SubscriptionCardComponent {
  @Input() product!: Product;
}
