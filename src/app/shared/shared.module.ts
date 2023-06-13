import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

import { NgIconsModule } from '@ng-icons/core';
import { heroArrowRight, heroBars3, heroXCircle } from '@ng-icons/heroicons/outline';
import { TwoColContainerComponent } from './layout/two-col-container/two-col-container.component';
import { CartComponent } from './components/cart/cart.component';
import { MaxDigitsDirective } from './directives/max-digits.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    TwoColContainerComponent,
    CartComponent,
    MaxDigitsDirective,
    ClickOutsideDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage,
    NgIconsModule.withIcons({ heroArrowRight, heroBars3, heroXCircle }),
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    TwoColContainerComponent,
    CartComponent,
    MaxDigitsDirective,
  ],
})
export class SharedModule {}
