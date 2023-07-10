import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[type="number"][cofMaxDigits]',
})
export class MaxDigitsDirective {
  @Input() maxDigits: number = 2;

  constructor(private elementRef: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    value = value.replace(/\D/g, '');
    const currentValue = parseFloat(value);
    if (currentValue && currentValue.toString().length > this.maxDigits) {
      this.elementRef.nativeElement.value = value.slice(0, this.maxDigits);
    }
  }
}
