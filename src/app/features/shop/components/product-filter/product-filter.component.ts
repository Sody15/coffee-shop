import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterType } from '../../shop.reducer';

@Component({
  selector: 'cof-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent {
  @Input() filter!: FilterType;
  @Output() onSelect = new EventEmitter<FilterType>();
}
