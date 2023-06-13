import { Directive, ElementRef, Output, EventEmitter, HostListener, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[cofClickOutside]',
})
export class ClickOutsideDirective {
  initialClick = false;

  @Output() onClickOutside: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: EventTarget | null) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside && this.initialClick) {
      this.onClickOutside.emit();
    }
    if (!this.initialClick) {
      this.initialClick = true;
    }
  }
}
