import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cofAccordionContent]',
})
export class AccordionContent {
  constructor(public templateRef: TemplateRef<any>) {}
}
