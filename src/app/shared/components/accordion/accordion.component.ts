import { Component, ContentChildren, QueryList } from '@angular/core';
import { AccordionItem } from './directives/accordion-item.directive';

@Component({
  selector: 'cof-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @ContentChildren(AccordionItem) items!: QueryList<AccordionItem>;

  expandPanel(item: AccordionItem) {
    item.toggle();
  }
}
