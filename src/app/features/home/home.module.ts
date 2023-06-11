import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, NgOptimizedImage, SharedModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
