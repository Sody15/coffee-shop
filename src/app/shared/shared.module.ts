import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgIconsModule } from '@ng-icons/core';
import { heroArrowLeft, heroArrowRight, heroBars3, heroShoppingCart, heroXMark } from '@ng-icons/heroicons/outline';
import {
  aspectsSocialInstagram,
  aspectsSocialFacebook,
  aspectsSocialTwitter,
  aspectsSocialYoutube,
} from '@ng-icons/ux-aspects';

import { ButtonComponent } from './components/button/button.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MaxDigitsDirective } from './directives/max-digits.directive';
import { ProductColorDirective } from './directives/product-color.directive';
import { QuantityComponent } from './components/quantity/quantity.component';
import { TwoColContainerComponent } from './layout/two-col-container/two-col-container.component';
import { MobileMenuComponent } from './layout/header/mobile-menu/mobile-menu.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionContent } from './components/accordion/directives/accordion-content.directive';
import { AccordionItem } from './components/accordion/directives/accordion-item.directive';

const ngIcons = {
  heroArrowLeft,
  heroArrowRight,
  heroBars3,
  heroShoppingCart,
  heroXMark,
  aspectsSocialInstagram,
  aspectsSocialFacebook,
  aspectsSocialTwitter,
  aspectsSocialYoutube,
};

@NgModule({
  declarations: [
    ButtonComponent,
    CartComponent,
    FooterComponent,
    HeaderComponent,
    MaxDigitsDirective,
    ProductColorDirective,
    QuantityComponent,
    TwoColContainerComponent,
    MobileMenuComponent,
    AccordionComponent,
    AccordionContent,
    AccordionItem,
  ],
  imports: [CommonModule, FormsModule, NgIconsModule.withIcons({ ...ngIcons }), NgOptimizedImage, RouterModule],
  exports: [
    ButtonComponent,
    CartComponent,
    FooterComponent,
    HeaderComponent,
    MaxDigitsDirective,
    ProductColorDirective,
    QuantityComponent,
    TwoColContainerComponent,
    AccordionComponent,
    AccordionContent,
    AccordionItem,
  ],
})
export class SharedModule {}
