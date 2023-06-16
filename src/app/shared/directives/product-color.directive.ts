import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Directive({
  selector: '[cofProductColor]',
})
export class ProductColorDirective {
  @Input('cofProductColor') product!: Product;

  @Input() onHover? = false;
  @Input() baseBgColor?: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    if (!this.onHover) {
      this.elementRef.nativeElement.style.backgroundColor = this.product.color;
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.onHover && this.product.color) {
      this.setBackgroundColor(this.product.color);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.onHover && this.baseBgColor) {
      this.setBackgroundColor(this.baseBgColor);
    }
  }

  setBackgroundColor(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
