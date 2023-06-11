import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { NgIconsModule } from '@ng-icons/core';
import { heroArrowRight } from '@ng-icons/heroicons/outline';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, NgOptimizedImage, NgIconsModule.withIcons({ heroArrowRight })],
  declarations: [HomeComponent],
})
export class HomeModule {}
