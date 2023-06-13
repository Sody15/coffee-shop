import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { StoreModule } from '@ngrx/store';
import { shopReducer } from './shop.reducer';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';

@NgModule({
  declarations: [ShopComponent, ProductComponent, ProductFilterComponent],
  imports: [CommonModule, ShopRoutingModule, SharedModule, StoreModule.forFeature('shop', shopReducer)],
})
export class ShopModule {}
