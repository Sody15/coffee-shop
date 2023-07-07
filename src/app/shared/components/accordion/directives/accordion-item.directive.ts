import { ContentChild, Directive, Input } from '@angular/core';
import { AccordionContent } from './accordion-content.directive';

@Directive({
  selector: 'cof-accordion-item',
})
export class AccordionItem {
  @Input() title = '';
  @Input() expanded = false;

  @ContentChild(AccordionContent) content!: AccordionContent;

  toggle() {
    this.expanded = !this.expanded;
  }
}
