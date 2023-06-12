import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

import { NgIconsModule } from '@ng-icons/core';
import { heroArrowRight, heroBars3 } from '@ng-icons/heroicons/outline';
import { TwoColContainerComponent } from './layout/two-col-container/two-col-container.component';
import { HeaderSeperatorComponent } from './layout/header/header-seperator/header-seperator.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, ButtonComponent, TwoColContainerComponent, HeaderSeperatorComponent],
  imports: [CommonModule, RouterModule, NgOptimizedImage, NgIconsModule.withIcons({ heroArrowRight, heroBars3 })],
  exports: [FooterComponent, HeaderComponent, ButtonComponent, TwoColContainerComponent, HeaderSeperatorComponent],
})
export class SharedModule {}
