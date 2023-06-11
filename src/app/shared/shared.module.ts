import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

import { NgIconsModule } from '@ng-icons/core';
import { heroArrowRight } from '@ng-icons/heroicons/outline';
import { TwoColContainerComponent } from './layout/two-col-container/two-col-container.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, ButtonComponent, TwoColContainerComponent],
  imports: [CommonModule, RouterModule, NgOptimizedImage, NgIconsModule.withIcons({ heroArrowRight })],
  exports: [FooterComponent, HeaderComponent, ButtonComponent, TwoColContainerComponent],
})
export class SharedModule {}
