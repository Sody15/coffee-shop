import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

import { NgIconsModule } from '@ng-icons/core';
import { heroArrowRight } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, ButtonComponent],
  imports: [CommonModule, RouterModule, NgIconsModule.withIcons({ heroArrowRight })],
  exports: [FooterComponent, HeaderComponent, ButtonComponent],
})
export class SharedModule {}
