import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

import { NgIconsModule } from '@ng-icons/core';
import { heroArrowLeft, heroArrowRight, heroBars3, heroShoppingCart, heroXMark } from '@ng-icons/heroicons/outline';
import { TwoColContainerComponent } from './layout/two-col-container/two-col-container.component';
import { CartComponent } from './components/cart/cart.component';
import { MaxDigitsDirective } from './directives/max-digits.directive';
import { QuantityComponent } from './components/quantity/quantity.component';
import { FormsModule } from '@angular/forms';

const ngIcons = { heroArrowLeft, heroArrowRight, heroBars3, heroShoppingCart, heroXMark };

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    TwoColContainerComponent,
    CartComponent,
    QuantityComponent,
    MaxDigitsDirective,
  ],
  imports: [CommonModule, FormsModule, RouterModule, NgOptimizedImage, NgIconsModule.withIcons({ ...ngIcons })],
  exports: [
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    TwoColContainerComponent,
    CartComponent,
    QuantityComponent,
    MaxDigitsDirective,
  ],
})
export class SharedModule {}
