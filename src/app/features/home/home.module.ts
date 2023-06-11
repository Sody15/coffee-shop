import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';

import { NgIconsModule } from '@ng-icons/core';
import { heroArrowDownCircle } from '@ng-icons/heroicons/outline';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgOptimizedImage,
    SharedModule,
    NgIconsModule.withIcons({ heroArrowDownCircle }),
  ],
  declarations: [HomeComponent, HeroComponent],
})
export class HomeModule {}
