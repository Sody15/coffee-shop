import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { NgIconsModule } from '@ng-icons/core';
import { heroArrowDownCircle } from '@ng-icons/heroicons/outline';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './pages/home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgOptimizedImage,
    SharedModule,
    NgIconsModule.withIcons({ heroArrowDownCircle }),
  ],
  declarations: [HomePageComponent, HeroComponent],
})
export class HomeModule {}
